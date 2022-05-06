const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = { 
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 2,
    isFetching: false

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId)
                    {return {...u, followed: true}}
                    return u;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId)
                    {return {...u, followed: false}}
                    return u;
                }),
            };

            case SETUSERS: {
                return {
                    
                    ...state, 
                    users: action.users
                    
                }
          }

            case SET_CURRENT_PAGE: {
                return {
                ...state,
                currentPage: action.currentPage
                }
            }

            case SET_TOTAL_USERS_COUNT: {
                return {
                    ...state,
                    totalUsersCount: action.count
                }
            }

            case TOGGLE_IS_FETCHING: {
                return {
                    ...state,
                    isFetching: action.isFetching
                }
            }

        default:
            return state;
    }
};

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId,
    };
};

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId,
    };
};

export const setUsers = (users) => {
    return {
        type: SETUSERS,
        users,
    };
};

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export default usersReducer;

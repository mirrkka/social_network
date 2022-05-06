const ADD_POST = "ADD-POST";
const UPDATENEWPOSTTEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    posts: [
        { id: 1, message: "Hello world", likes: 11 },
        { id: 2, message: "Hello to you", likes: 12 },
    ],
    newPostText: "it-camasutra",
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likes: 0,
            };
            return {
              ...state,
              posts: [...state.posts, newPost],
              newPostText : ""
            };
           
          }
        case UPDATENEWPOSTTEXT: {
          return {
            ...state,
            newPostText: action.newText
          }  
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATENEWPOSTTEXT,
        newText: text,
    };
};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
};

export default profileReducer;

const ADD_POST = "ADD-POST";
const UPDATENEWPOSTTEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 1, message: "Hello world", likes: 11 },
        { id: 2, message: "Hello to you", likes: 12 },
    ],
    newPostText: "it-camasutra",
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

export default profileReducer;

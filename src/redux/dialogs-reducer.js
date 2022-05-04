const UPDATENEWBESSAGEBODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Zhenya" },
        { id: 3, name: "Sergey" },
        { id: 4, name: "Petya" },
        { id: 5, name: "Sasha" },
    ],
    messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Hi" },
        { id: 3, message: "Hi" },
        { id: 4, message: "Hi" },
        { id: 5, message: "Hi" },
    ],
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATENEWBESSAGEBODY:
            return {
                ...state,
                newMessageBody: action.body
            };
            
        case SEND_MESSAGE:
          let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, { id: 6, message: body }], //добавляем элемент в массив со спред оператором
            };
             
        default:
            return state;
    }
};

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    };
};

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATENEWBESSAGEBODY,
        body: body,
    };
};

export default dialogsReducer;

import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import friendsReducer from './friends-reducer'


let store = {
  _state: {

    profilePage: {
      posts: [
        {id: 1, message:"Hello world", likes: 11},
        {id: 2, message:"Hello to you", likes: 12},
      ],
      newPostText: 'it-camasutra'
    },
  
    dialogsPage: {
      dialogs: [
        {id: 1, name:"Dima"},
        {id: 2, name:"Zhenya"},
        {id: 3, name:"Sergey"},
        {id: 4, name:"Petya"},
        {id: 5, name:"Sasha"}
      ],
      messages:  [
        {id: 1, message:"Hello"},
        {id: 2, message:"Hi"},
        {id: 3, message:"Hi"},
        {id: 4, message: "Hi"},
        {id: 5, message:"Hi"}
      
      ],
      newMessageBody: ''
    },
  
    friendsPage: {
      friends: [
        {id: 1, name: "Masha", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtRmVGcQ8M0rXrCGvAVIC4vo9YBv4UgHOow&usqp=CAU'},
        {id: 2, name: 'Rita', image: 'https://media.vanityfair.com/photos/5f7f33766cac71ad7f787fce/3:2/w_1998,h_1332,c_limit/mk-olsen.jpg'},
        {id: 3, name: 'Ashley', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXK6gibkjTizu1Ni_9p3muuwkH2mCm7h5Qdg&usqp=CAU'}
      ]
  
    }
  },
  getState () {
    return this._state;
  },
  _rerenderEntireTree () {
    console.log('State changed');
  },
  subscriber (observer) {
    this._rerenderEntireTree = observer;
  },

  addDialogs () {
    let newDialog = {
      id: 3, 
      message: this._state.dialogsPage.newDialogText
    };
    this._state.dialogsPage.messages.push(newDialog)
    this._state.dialogsPage.newDialogText = '';
    this._rerenderEntireTree(this._state)
  },
  updateNewDialog (newText) {
    this._state.dialogsPage.newDialogText = newText;
    this._rerenderEntireTree(this._state)
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

    this._rerenderEntireTree(this._state)

  }

}


export default store;
window.store = store;
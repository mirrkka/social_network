import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    const dialogElements = state.dialogs.map((dialog) => (
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    ));

    const messagesElements = state.messages.map((message) => (
        <Message message={message.message} id={message.id} key={message.id} />
    ));
    const newMessageBody = state.newMessageBody;

    const sendMessage = () => {
        props.sendMessage();
    };

    const onChangeMessage = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    if (!props.isAuth) {
        return <Navigate to="/login"/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>{dialogElements}</div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            onChange={onChangeMessage}
                            value={newMessageBody}
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;

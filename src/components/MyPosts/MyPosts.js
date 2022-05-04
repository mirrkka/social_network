import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    const newPostElement = React.createRef();
    const postsElements = props.posts.map((post) => (
        <Post message={post.message} likes={post.likes} id={post.id} />
    ));

    const onAddPost = () => {
        props.addPost();
    };

    const onChangePost = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3> my posts </h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onChangePost}
                    ></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div>New posts</div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;

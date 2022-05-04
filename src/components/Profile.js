import store from "../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;

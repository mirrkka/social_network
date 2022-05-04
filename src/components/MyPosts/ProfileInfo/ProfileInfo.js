import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;

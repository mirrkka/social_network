import s from './Post.module.css'

const Post = (props) => {
    return (  
            <div className = {s.item}>
              <img src='https://www.biography.com/.image/t_share/MTE5NTU2MzE2NTE5MzAyNjY3/elizabeth-olsen-20631899-1-402.jpg'/>
              {props.message}
              <div>
                <span>like: {props.likes}</span>
              </div>
            </div>
    )
}

export default Post;
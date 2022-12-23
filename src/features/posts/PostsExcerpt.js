import ReactionButtons from "./ReactionButtons";
import { useNavigate } from 'react-router-dom'

const PostsExcerpt = ({ post }) => {
    const navigate = useNavigate()

    const onViewPostClicked = () => {
        navigate(`post/${post.id}`)   
    }
    return (
        <article>
            <h2>{post.title}</h2>
            <p className="excerpt">{post.body.substring(0, 75)}...</p>
            <p className="postCredit">
                <button
                    className="viewPost"
                    type="button"
                    onClick={onViewPostClicked}
                >
                    View Post
                </button>
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}
export default PostsExcerpt
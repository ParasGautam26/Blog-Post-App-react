import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'
import ReactionButtons from "./ReactionButtons";

import { useParams,useNavigate } from 'react-router-dom';

const SinglePostPage = () => {
    const { postId } = useParams()
    const navigate = useNavigate()

    const post = useSelector((state) => selectPostById(state, Number(postId)))

    const onEditPostClicked = () => {
        navigate(`/post/edit/${post.id}`)   
    }

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p className="postCredit">
                <button
                    className="viewPost"
                    type="button"
                    onClick={onEditPostClicked}
                >
                    Edit Post
                </button>
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}

export default SinglePostPage
import { useState } from "react";
import { useDispatch} from "react-redux";

import { addNewPost } from "./postsSlice";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [isActive, setActive] = useState(false);
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')


    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    

    const canSave = [title, content].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                
                setAddRequestStatus('pending')
                dispatch(addNewPost({ title, body: content})).unwrap()
                setActive(!isActive);
                setTitle('')
                setContent('')
                navigate('/')
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }

    }

    
    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    className={isActive ? 'savePost': null}
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}
export default AddPostForm
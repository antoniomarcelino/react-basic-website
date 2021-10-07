import { useParams, useHistory } from 'react-router-dom'
import useFetch from './useFetch';

const PostDetail = () => {
    const { id } = useParams()
    const { data: post, error, isLoading } = useFetch('http://localhost:8000/posts/' + id)
    const history = useHistory()

    const handleClick = () => {
        fetch('http://localhost:8000/posts/' + post.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return ( 
        <div className="post-detail">
            { isLoading && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { post && (
                <article>
                    <h2>{post.title}</h2>
                    <p>Written by {post.author}</p>
                    <br />
                    <div>{post.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default PostDetail;
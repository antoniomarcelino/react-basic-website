import { Link } from 'react-router-dom'

const PostList = ({posts, title, handleDelete}) => {
    
    return (
        <div className="post-list">
            <h2>{title}</h2>
            {posts.map((post) => (
                <div className="post-preview" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                    <h2>{post.title}</h2>
                    <h4>Written by {post.author}</h4>
                    </Link>
                    
                    <br />
                </div>
            ))}
        </div>
    )
}

export default PostList;
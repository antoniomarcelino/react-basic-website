import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const post = { title, body, author }
        setIsLoading(true)
        fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(post)
        }).then(()=>{
            console.log('new blog added')
            setIsLoading(false)
            //history.go(-1)
            history.push('/')
        })
        
    }

    return ( 
        <div className="create">
            <h2>Add a new post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post title</label>
                <input type="text" required value={title} onChange={(a) => setTitle(a.target.value)}/>
                <label>Post content</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Author's name</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                </select>
                { !isLoading && <button>Add Post</button>}
                { isLoading && <button disabled>Adding Post...</button>}
                
            </form>
        </div>
     );
}
 
export default Create;
<div>
    <h2>Something</h2>
</div>
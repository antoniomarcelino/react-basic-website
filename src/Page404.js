import { Link } from 'react-router-dom'

const Page404 = () => {
    return ( 
        <div className="not-found">
            <h2>Error 404</h2>
            <p>That page cannot be found</p>
            <br />
            <Link to="/">Back to homepage...</Link>
        </div>
     );
}
 
export default Page404;
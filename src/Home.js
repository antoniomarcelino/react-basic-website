import useFetch from './useFetch'
import PostList from './PostList'

const Home = () => {
    const { data: posts, isLoading, error } = useFetch('http://localhost:8000/posts')
    return ( 
        <div className="home">
             {isLoading && <div>Loading...</div>}
             {error && <div>{error}</div>}
             {posts && <PostList posts={posts} title="All Posts" />}
        </div>
     );
}
 
export default Home;
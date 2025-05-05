import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import { Link } from 'react-router-dom';
import '../style.css';


const Home = () => {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>

      {status === 'loading' && <p className="text-center">Loading...</p>}
      {status === 'failed' && <p className="text-center text-red-500">Failed to fetch posts.</p>}

      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
            <h2 className="post-title">{post.title.slice(0, 15)}...</h2>
            <p className="post-body">{post.body.slice(0, 50)}... 
              <Link className="read-more" to={`/item/${post.id}`}> Read More</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

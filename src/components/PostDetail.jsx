import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.posts.find((p) => p.id === parseInt(id)));

  if (!post) {
    return <p className="text-center">Post not found!</p>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <img className="w-full h-60 object-cover mt-4 rounded-md" src={`https://picsum.photos/400?random=${post.id}`} alt="Post" />
      <p className="text-gray-700 mt-4">{post.body}</p>
      <p className="mt-2 text-gray-500">Author: User {post.userId}</p>
      <Link to="/" className="text-blue-600 mt-4 inline-block">← Back to Home</Link>
    </div>
  );
};

export default PostDetail;

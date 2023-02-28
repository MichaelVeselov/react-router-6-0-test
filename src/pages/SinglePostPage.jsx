import { useState, useEffect } from 'react';

import { Link, useParams, useNavigate } from 'react-router-dom';

const SinglePostPage = () => {
  const [post, setPost] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
};

export default SinglePostPage;

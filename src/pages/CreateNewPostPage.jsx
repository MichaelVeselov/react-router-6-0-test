import { useNavigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const CreateNewPostPage = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    signOut(() => navigate('/', { replace: true }));
  };

  return (
    <div>
      <h1> Create New Post</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default CreateNewPostPage;

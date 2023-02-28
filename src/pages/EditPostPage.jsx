import { useParams } from 'react-router-dom';

const EditPostPage = () => {
  const { id } = useParams();
  return <div>Edit Post {id}</div>;
};

export default EditPostPage;

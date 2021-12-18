import { FC } from 'react';
import { useParams } from 'react-router-dom';

const ObjectDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <div>{id}</div>
    </>
  );
};

export default ObjectDetailPage;

import { FC } from 'react';
import { useParams } from 'react-router-dom';

const ObjectCreatePage: FC = () => {
  const { name } = useParams<{ name?: string }>();

  return <div>Object: {name ?? '404'}</div>;
};

export default ObjectCreatePage;

import { Route, Switch } from 'react-router';
import ObjectCreatePage from './object-create';
import ObjectDetailPage from './object-detail';

const ObjectsRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/objects/new/:name?" component={ObjectCreatePage} />
        <Route path="/objects/:id" component={ObjectDetailPage} />
      </Switch>
    </>
  );
};

export default ObjectsRouter;

import CreateObject from '../components/create-object';

const HomePage = () => {
  return (
    <div className="container">
      <div className="centered-body">
        <div className="row">
          <div className="col-sm">&nbsp;</div>
          <div className="col-lg">
            <CreateObject existingObjectNames={['']} />
          </div>
          <div className="col-sm">&nbsp;</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

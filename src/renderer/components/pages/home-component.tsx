import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const HomeComponent = () => {
  const objectNameInput = React.createRef<HTMLInputElement>();
  const history = useHistory();

  const createObject = () => {
    const inputValue = objectNameInput.current?.value;

    if (inputValue !== undefined && inputValue.length > 0) {
      history.push(`objects/new/${inputValue}`);
    }
  };

  return (
    <div className="container centered-body">
      <div>
        <p>New install? Great! Let&apos;s create your first object.</p>
        <form className="d-flex">
          <div className="input-group mb-3">
            <input
              ref={objectNameInput}
              type="text"
              className="form-control"
              placeholder="Object's name..."
              aria-label="Object's name"
              aria-describedby="button-create"
            />
            <button
              className="btn btn-primary"
              type="button"
              id="button-create"
              onClick={createObject}
            >
              Create
            </button>
          </div>
        </form>
        <Link className="float-end" to="/help">
          Need help
        </Link>
      </div>
    </div>
  );
};

export default HomeComponent;

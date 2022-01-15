import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/objects" className="nav-link">
              Objects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-link">
              Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/help" className="nav-link">
              Help
            </Link>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search everything..."
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navigation;

const NavigationComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" href="index.html">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              Objects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              Help
            </a>
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

export default NavigationComponent;

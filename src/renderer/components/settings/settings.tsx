const SettingsPage = () => {
  return (
    <div className="container centered-body">
      <div className="form-check form-switch">
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          <span>Dark Mode</span>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
        </label>
      </div>
    </div>
  );
};

export default SettingsPage;

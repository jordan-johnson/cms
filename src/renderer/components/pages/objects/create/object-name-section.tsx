import React, { useState } from 'react';

export interface IObjectNameSectionProperties {
  name?: string;
}

const ObjectNameSection: React.FC<IObjectNameSectionProperties> = ({
  name,
}) => {
  const [nameField, setNameField] = useState(name);

  return (
    <>
      <h4>Object</h4>
      <p className="font-italic">
        Give your object a name to describe its future records (i.e. Contacts).
      </p>
      <div className="form-group">
        <input
          key="object-name-input"
          type="text"
          className="form-control is-valid"
          placeholder="Object's name..."
          aria-label="Object's name"
          aria-describedby="object-name"
          id="object-name"
          value={nameField}
          onChange={(e) => setNameField(e.target.value)}
        />
      </div>
    </>
  );
};

export default ObjectNameSection;

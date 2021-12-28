import { useState } from 'react';

interface ICreateObjectProperties {
  existingObjectNames: string[];
}

const CreateObject: React.FC<ICreateObjectProperties> = ({
  existingObjectNames,
}) => {
  const [objectNameInputValue, setObjectNameInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validationClassNames = () => {
    let classNames = 'form-control ';

    if (isValid && objectNameInputValue !== '') {
      classNames += 'is-valid';
    } else if (!isValid && objectNameInputValue !== '') {
      classNames += 'is-invalid';
    }

    return classNames;
  };

  const onChange = (value: string) => {
    const isFoundInArray = existingObjectNames.includes(value);

    setObjectNameInputValue(value);
    setIsValid(!isFoundInArray);
  };

  return (
    <>
      <input
        key="object-name-input"
        type="text"
        className={validationClassNames()}
        placeholder="Object's name..."
        value={objectNameInputValue}
        onChange={(element) => onChange(element.target.value)}
      />
      {!isValid && objectNameInputValue !== '' && (
        <div className="invalid-feedback">
          Sorry, that object already exists. Try another?
        </div>
      )}
    </>
  );
};

export default CreateObject;

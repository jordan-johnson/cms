import { IFieldPairing } from '../common/ifield-pairing';

interface IFieldInputsProperties {
  index: number;
  element: IFieldPairing;
  onFieldChange: (
    element:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => void;
}

const FieldInputs: React.FC<IFieldInputsProperties> = ({
  index,
  element,
  onFieldChange,
}) => {
  return (
    <>
      <div className="row ms-auto">
        <div className="col">
          <label htmlFor="field-name">
            Name
            <input
              key={`${element.uniqueId}-name`}
              name="name"
              type="text"
              className="form-control"
              placeholder="Field's name..."
              aria-label="Field's name"
              aria-describedby="field-name"
              id="field-name"
              onChange={(e) => onFieldChange(e, index)}
            />
          </label>
        </div>
        <div className="col">
          <label htmlFor="field-type">
            Data Type
            <select
              key={`${element.uniqueId}-type`}
              className="form-select"
              id="field-type"
              name="type"
              onChange={(e) => onFieldChange(e, index)}
              value={element.type}
            >
              <option defaultValue="true">Text</option>
              <option>Number</option>
              <option>Phone Number</option>
              <option>Email</option>
              <option>URL</option>
              <option>Image</option>
            </select>
          </label>
        </div>
      </div>
    </>
  );
};

export default FieldInputs;

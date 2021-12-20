import { Link } from 'react-router-dom';
import FieldInputs from './field-inputs';
import { IFieldPairing } from '../common/ifield-pairing';

interface IFieldsSectionProperties {
  fields: IFieldPairing[];
  onAddField: () => void;
  onFieldChange: (
    element:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => void;
}

const FieldsSection: React.FC<IFieldsSectionProperties> = ({
  fields,
  onAddField,
  onFieldChange,
}) => {
  return (
    <>
      <h4>Fields</h4>
      <p className="font-italic">
        Enter a name for your field and the type of data you will store in it it
        (i.e. First Name as &quot;text&quot;, Phone as &quot;phone
        number&quot;).<Link to="/help">Need help?</Link>
      </p>
      {fields.map((element, index) => (
        <FieldInputs
          key={element.uniqueId}
          index={index}
          element={element}
          onFieldChange={onFieldChange}
        />
      ))}
      <div className="button-section">
        <button className="btn btn-info" type="button" onClick={onAddField}>
          Add Field
        </button>
        <button className="btn btn-primary float-end" type="submit">
          Create Object
        </button>
      </div>
    </>
  );
};

export default FieldsSection;

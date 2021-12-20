import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import FieldsSection from './create/fields-section';
import { IFieldPairing } from './common/ifield-pairing';
import ObjectNameSection from './create/object-name-section';

const ObjectCreatePage: FC = () => {
  const { name } = useParams<{ name?: string }>();
  const [fields, setFields] = useState<IFieldPairing[]>([]);

  const onFormSubmit = (data: React.FormEvent<HTMLFormElement>) => {
    data.preventDefault();
  };

  const onAddField = () => {
    const generateKey = new Date().getTime().toString();

    setFields([...fields, { uniqueId: generateKey, name: '', type: 'Text' }]);
  };

  const onFieldChange = (
    element:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const newFieldValues = [...fields];

    newFieldValues[index][element.target.name] = element.target.value;

    setFields(newFieldValues);
  };

  return (
    <div className="container h-100 content">
      <div className="row align-items-center h-100">
        <form className="col-6 mx-auto" onSubmit={onFormSubmit}>
          <ObjectNameSection key="object-name-section" name={name} />
          <FieldsSection
            fields={fields}
            onAddField={onAddField}
            onFieldChange={onFieldChange}
          />
        </form>
      </div>
    </div>
  );
};

export default ObjectCreatePage;

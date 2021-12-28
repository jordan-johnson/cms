export type FieldType = 'text' | 'number' | 'checkbox' | 'range';

export interface IField {
  name: string;
  type: FieldType;
  value?: string | number | boolean;

  validate(): void;
}

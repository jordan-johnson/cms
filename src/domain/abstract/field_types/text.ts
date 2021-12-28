import { FieldType, IField } from '../../../models/ifield';

class Text implements IField {
  name: string = 'undefined';

  type: FieldType = 'text';

  value: string = '';

  minLength?: number;

  maxLength?: number;

  constructor(
    name: string,
    options?: {
      defaultValue: string;
      minLength?: number;
      maxLength?: number;
    }
  ) {
    this.name = name;
    this.value = options?.defaultValue ?? '';
    this.minLength = options?.minLength;
    this.maxLength = options?.maxLength;
  }

  validate(): void {
    // check if value is longer than max length
    if (this.value && this.maxLength) {
      if (this.value?.length > this.maxLength) {
        throw new Error('Value exceeds maximum length');
      }
    }
  }
}

export default Text;

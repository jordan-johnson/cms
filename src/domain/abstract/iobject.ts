import { IField } from './ifield';

export interface IObject {
  id: number;
  name: string;
  fields: IField[];
}

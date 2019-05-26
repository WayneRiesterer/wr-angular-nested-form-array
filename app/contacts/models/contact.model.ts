import { Name } from './name.model';
import { Department } from './department.model';

export interface Contact {
  name: Name;
  departments: Array<Department>;
}
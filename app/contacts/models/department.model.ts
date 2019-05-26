import { Role } from './role.model';

export interface Department {
  name: string;
  roles: Array<Role>;
}
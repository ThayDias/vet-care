import { Specialty } from "./specialty.model";

export interface Veterinarian {
  name: string;
  document: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
  specialty: Specialty;
}
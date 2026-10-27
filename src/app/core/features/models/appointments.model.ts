import { Patient } from "./patient.model";
import { Tutor } from "./tutors.model";

export interface Appointment {
  tutor: Tutor;
  patient: Patient;
  veterinarian: string;
  date: Date;
  time: string;
  notes: string;
  status: boolean;
  createdAt: Date;
  scheduledAt: Date;
}
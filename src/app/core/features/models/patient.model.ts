import { Gender } from "../enums/gender.enum";
import { Breed } from "./breed.model";
import { Species } from "./species.model";
import { Tutor } from "./tutors.model";

export interface Patient {
  name: string;
  breed: Breed;
  species: Species;
  gender: Gender;
  birthDate: Date;
  weight: number;
  color: string;
  notes: string;
  status: boolean;
  tutor: Tutor;
}
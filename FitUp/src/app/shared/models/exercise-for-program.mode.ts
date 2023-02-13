import { Exercise } from './exercise.model';

export interface ExerciseForProgram extends Exercise {
  sets: number;
  repRange: string;
}

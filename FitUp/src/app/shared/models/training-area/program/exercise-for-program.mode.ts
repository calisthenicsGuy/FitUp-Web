import { Exercise } from '../exercise/exercise.model';

export interface ExerciseForProgram extends Exercise {
  sets: number;
  repRange: string;
}

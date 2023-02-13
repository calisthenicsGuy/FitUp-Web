import { WorkoutStatus } from './workout-status.model';
import { ExerciseForProgram } from './exercise-for-program.mode';
import { WorkoutType } from './workout-type.model';

export interface Workout {
  id: number;
  nameDay: string;
  status: WorkoutStatus;
  type: WorkoutType;
  exercises: ExerciseForProgram[];
}

import { WorkoutStatus } from './workout-status.model';
import { ExerciseForProgram } from './training-area/exercise/exercise-for-program.mode';
import { WorkoutType } from './workout-type.model';

export interface Workout {
  id: number;
  type: WorkoutType;
  exercises: ExerciseForProgram[];
}

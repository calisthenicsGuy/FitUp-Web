import { ProgramLocation } from '../enums/program-location.enum';
import { ProgramSplit } from './program-split.model';

export interface Program {
  id: number;
  location: ProgramLocation;
  timesPerWeek: number;
  split: ProgramSplit;
  trainingDaysForAWeek: number;
  startDate: Date;
  endDate: Date;
  durationInMonths: number;
}

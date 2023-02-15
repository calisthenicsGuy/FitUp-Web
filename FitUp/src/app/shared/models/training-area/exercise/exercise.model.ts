import { DifficultLevel } from "../enums/difficult-level.enum";

export interface Exercise {
  id: number;
  name: string;
  targetMusculeGroups: string[];
  description: string;
  video: string;
  difficultLevel: DifficultLevel;
}

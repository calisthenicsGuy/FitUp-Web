import { Exercise } from "./exercise.model";

export interface MuscleGroup {
    id: number;
    name: string;
    image: string;
    descriprion: string;
    exercises: Exercise[];
}
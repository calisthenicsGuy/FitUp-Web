import { Weight } from "./weight.model";

export interface ProgressTrack {
    id: number;
    weightRecords: Weight[];
}
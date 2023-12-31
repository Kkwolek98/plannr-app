import { Exercise } from "./exercise";

export type Workout = {
	id: string;
	name: string;
	description?: string;
	sets: ExerciseSet[];
	tags?: string[];
};

export type ExerciseSet = {
	id: string;
	name: string;
	setItems: Exercise[];
	rest?: number;
};

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
	setItems: SetItem[];
	rest?: number;
};

export type SetItem = {
	id: string;
	details: Exercise;
	repMin?: number;
	repMax?: number;
	repExact?: number;
	repWeight?: number;
	repType?: string;
	sort: number;
	rest?: number;
};

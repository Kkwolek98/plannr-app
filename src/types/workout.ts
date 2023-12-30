export type Workout = {
	id: number;
	name: string;
	description?: string;
	sets: unknown[];
	tags?: string[];
};

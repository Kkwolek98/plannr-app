import axios from "axios";
import config from "../core/config";
import { Workout } from "../types/workout";

export function getWorkouts(): Promise<Workout[]> {
	return axios.get(`${config.baseUrl}/workouts`).then((res) => res.data);
}

export function getWorkout(id: string): Promise<Workout> {
	return axios.get(`${config.baseUrl}/workouts/${id}`).then((res) => res.data);
}

export function createWorkout(workout: Partial<Workout>): Promise<Workout> {
	return axios
		.post(`${config.baseUrl}/workouts`, workout)
		.then((res) => res.data);
}

export function updateWorkout(workout: Workout): Promise<Workout> {
	return axios
		.put(`${config.baseUrl}/workouts/${workout.id}`, workout)
		.then((res) => res.data);
}

export function addNewSet(
	workoutId: string,
	set: { name: string },
): Promise<Workout> {
	return axios
		.post(`${config.baseUrl}/workouts/${workoutId}/sets`, set)
		.then((res) => res.data);
}

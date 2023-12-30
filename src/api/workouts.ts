import axios from "axios";
import config from "../core/config";
import { Workout } from "../types/workout";

export function getWorkouts(): Promise<Workout[]> {
	return axios.get(`${config.baseUrl}/workouts`).then((res) => res.data);
}

export function getWorkout(id: string): Promise<Workout> {
	return axios.get(`${config.baseUrl}/workouts/${id}`).then((res) => res.data);
}

export function updateWorkout(workout: Workout): Promise<Workout> {
	return axios
		.put(`${config.baseUrl}/workouts/${workout.id}`, workout)
		.then((res) => res.data);
}

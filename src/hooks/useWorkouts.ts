import { useEffect, useState } from "react";
import { getWorkouts } from "../api/workouts";
import { Workout } from "../types/workout";

export default function useWorkouts() {
	const [workouts, setWorkouts] = useState<Workout[]>([]);
	useEffect(() => {
		getWorkouts().then((res) => {
			setWorkouts(res);
		});
	}, []);
	return workouts;
}

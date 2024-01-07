import { useEffect, useState } from "react";
import { getWorkout$ } from "../api/workouts";
import { Workout } from "../types/workout";

export default function useWorkout(id: string | undefined) {
	const [workout, setWorkout] = useState<Workout | null>(null);

	useEffect(() => {
		if (id) {
			getWorkout$(id).then((res) => {
				setWorkout(res);
			});
		}
	}, [id]);

	return workout;
}

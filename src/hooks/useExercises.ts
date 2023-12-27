import axios from "axios";
import { useEffect, useState } from "react";
import config from "../core/config";
import { Exercise } from "../types/exercise";

export default function useExercises() {
	const [exercises, setExercises] = useState<Exercise[]>([]);

	useEffect(() => {
		axios<Exercise[]>(`${config.baseUrl}/exercises`).then((response) => {
			setExercises(response.data);
		});
	}, []);

	return exercises;
}

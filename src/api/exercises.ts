import axios from "axios";
import config from "../core/config";
import { Exercise } from "../types/exercise";

export function postExercise$(exercise: Partial<Exercise>): Promise<Exercise> {
	return axios.post(`${config.baseUrl}/exercises`, exercise);
}

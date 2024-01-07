import axios from "axios";
import config from "../core/config";
import { ExerciseSet, SetItem } from "../types/workout";

export function addItemToSet$(
	setId: string,
	item: Omit<SetItem, "id">,
): Promise<ExerciseSet> {
	return axios
		.post(`${config.baseUrl}/sets/${setId}/items`, item)
		.then((res) => res.data);
}

export function updateSet$(set: Partial<ExerciseSet>): Promise<ExerciseSet> {
	return axios
		.put(`${config.baseUrl}/sets/${set.id}`, set)
		.then((res) => res.data);
}

export function deleteSet$(setId: string): Promise<{ removed: boolean }> {
	return axios
		.delete(`${config.baseUrl}/sets/${setId}`)
		.then((res) => res.data);
}

export function removeSetItem$(itemId: string): Promise<{ removed: boolean }> {
	return axios
		.delete(`${config.baseUrl}/sets/items/${itemId}`)
		.then((res) => res.data);
}

import axios from "axios";
import config from "../core/config";
import { SetItem } from "../types/workout";

export function addItemToSet(
	setId: string,
	item: Omit<SetItem, "id">,
): Promise<SetItem> {
	return axios
		.post(`${config.baseUrl}/sets/${setId}/new-item`, item)
		.then((res) => res.data);
}

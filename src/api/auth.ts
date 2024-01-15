import axios from "axios";
import config from "../core/config";
import { User } from "../types/user";

export function login$(
	email: string,
	password: string,
): Promise<{ token: string; user: User }> {
	return axios
		.post(`${config.baseUrl}/auth/login`, { email, password })
		.then((res) => res.data);
}

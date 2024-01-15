import { useNavigate } from "react-router";
import { login$ } from "../../../api/auth";
import { useAuthContext } from "../../../contexts/useAuthContext";

export default function useLoginForm() {
	const { setToken, setUser } = useAuthContext();
	const navigate = useNavigate();

	const isEmail = (email: string) => {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	};

	const minLength = (value: string, length: number) => {
		return value.length >= length;
	};

	const validate = (values: { email: string; password: string }) => {
		const errors: { email?: string; password?: string } = {};

		if (!values.email) {
			errors.email = "Email is required";
		} else if (!isEmail(values.email)) {
			errors.email = "Invalid email address";
		}

		if (!values.password) {
			errors.password = "Password is required";
		} else if (!minLength(values.password, 8)) {
			errors.password = "Password must be 8 or more characters";
		}

		return errors;
	};

	const logIn = ({ email, password }: { email: string; password: string }) => {
		login$(email, password).then((res) => {
			console.log(res);
			setToken(res.token);
			setUser(res.user);
			navigate("/");
		});
	};

	return {
		validate,
		logIn,
	};
}

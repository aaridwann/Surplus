import React, { useEffect } from 'react';
import LoginComponent from './Login.Component';
import { SET_LOGIN } from '../../Redux/Features/Auth/AuthFeature';
import { useDispatch, useSelector } from 'react-redux';
import { SET_NOTIFICATION } from '../../Redux/Features/Notification/NotificationFeature';
import { SET_REGISTER } from '../../Redux/Features/Users/Users';

const initialState = {
	username: '',
	password: '',
	register: {
		username: '',
		password: '',
		confirmationPassword: '',
		error: '',
	},
};

function LoginContainer() {
	const dispatch = useDispatch();
	const [state, setState] = React.useState(initialState);
	const { register } = useSelector((state) => state);
	const ChangeInput = (name, value) => {
		setState((prev) => ({ ...prev, [name]: value }));
	};

	const LoginFunction = () => {
		const find = register.find((val) => val?.username === state?.username);
		if (!find) {
			return dispatch(
				SET_NOTIFICATION({ type: 'ERROR', message: 'Account not found' })
			);
		}
		return dispatch(SET_LOGIN({ username: state.username }));
	};

	function setRegisterChange({ type, value }) {
		setState((prev) => ({
			...prev,
			register: { ...prev.register, [type]: value },
		}));
	}

	const SubmitRegister = () => {
		const { username } = state.register;
		const duplicate = register?.find((val) => val?.username === username);
		if (duplicate) {
			setState((prev) => ({
				...prev,
				register: { ...prev.register, error: 'Username already used' },
			}));
			dispatch(
				SET_NOTIFICATION({
					type: 'ERROR',
					message: 'Username has already used',
				})
			);
			return false;
		}

		setState((prev) => ({
			...prev,
			register: { username: '', password: '', confirmationPassword: '' },
		}));
		dispatch(
			SET_NOTIFICATION({ type: 'SUCCESS', message: 'Success Register' })
		);
		dispatch(SET_REGISTER(state.register));
		return true;
	};

	function validationRegister() {
		const { register } = state;
		if (register.password !== register.confirmationPassword) {
			setState((prev) => ({
				...prev,
				register: { ...prev.register, error: 'Password is not match' },
			}));
		} else
			setState((prev) => ({
				...prev,
				register: { ...prev.register, error: '' },
			}));
	}

	useEffect(() => validationRegister(), [
		state.register.password,
		state.register.confirmationPassword,
		state.register.username,
	]);

	const method = {
		LoginFunction,
		ChangeInput,
		setRegisterChange,
		SubmitRegister,
	};

	return <LoginComponent state={state} method={method} />;
}

export default LoginContainer;

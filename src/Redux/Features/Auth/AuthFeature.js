import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLogin: false,
	username: '',
	email: '',
};

export const AuthSlice = createSlice({
	initialState,
	name: 'auth',
	reducers: {
		SET_LOGIN: (state, actions) => {
			const { payload } = actions;
			return { isLogin: true, username: payload.username, email: payload.email };
		},
		RESET_AUTH: () => initialState,
	},
});

export const { SET_LOGIN, RESET_AUTH } = AuthSlice.actions;
export default AuthSlice.reducer;

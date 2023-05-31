import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const RegisterSlice = createSlice({
	initialState,
	name: 'auth',
	reducers: {
		SET_REGISTER: (state, actions) => {
			const { payload } = actions;
			return [...state, { ...payload }];
		},
	},
});

export const { SET_REGISTER } = RegisterSlice.actions;
export default RegisterSlice.reducer;

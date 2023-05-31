import { createSlice } from '@reduxjs/toolkit';
import { get } from 'lodash';

const initialState = {
	isShow: false,
	type: '',
	message: '',
};

export const typeNotification = ['ERROR', 'WARNING', 'SUCCESS', 'INFO'];

export const NotificationSlice = createSlice({
	initialState,
	name: 'auth',
	reducers: {
		SET_NOTIFICATION: (state, actions) => {
			const { payload } = actions;
			const type = get(payload, 'type', 'info');
			const message = get(payload, 'message', '');

			if (!typeNotification.includes(type)) return initialState;

			return { isShow: true, message, type };
		},
		RESET_NOTIFICATION: () => initialState,
	},
});

export const {
	SET_NOTIFICATION,
	RESET_NOTIFICATION,
} = NotificationSlice.actions;
export default NotificationSlice.reducer;

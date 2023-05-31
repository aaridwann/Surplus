import {
	NotificationSlice,
	SET_NOTIFICATION,
	RESET_NOTIFICATION,
} from './NotificationFeature';

describe('NotificationSlice reducers', () => {
	const initialState = {
		isShow: false,
		type: '',
		message: '',
	};

	it('should handle SET_NOTIFICATION with valid type', () => {
		const initialState = {
			isShow: false,
			type: '',
			message: '',
		};
		const action = {
			type: SET_NOTIFICATION.type,
			payload: {
				type: 'SUCCESS',
				message: 'Notification message',
			},
		};
		const nextState = NotificationSlice.reducer(initialState, action);
		expect(nextState).toEqual({
			isShow: true,
			type: 'SUCCESS',
			message: 'Notification message',
		});
	});

	it('should handle SET_NOTIFICATION with invalid type', () => {
		const currentState = {
			isShow: false,
			type: '',
			message: '',
		};
		const action = {
			type: SET_NOTIFICATION.type,
			payload: {
				type: 'INVALID_TYPE',
				message: 'Notification message',
			},
		};
		const nextState = NotificationSlice.reducer(currentState, action);
		expect(nextState).toEqual(initialState);
	});

	it('should handle RESET_NOTIFICATION', () => {
		const currentState = {
			isShow: true,
			type: 'SUCCESS',
			message: 'Notification message',
		};
		const action = { type: RESET_NOTIFICATION.type };
		const nextState = NotificationSlice.reducer(currentState, action);
		expect(nextState).toEqual(initialState);
	});
});

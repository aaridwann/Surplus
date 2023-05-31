import { AuthSlice, SET_LOGIN, RESET_AUTH } from './AuthFeature';

describe('AuthSlice reducers', () => {
	it('should handle SET_LOGIN', () => {
		const initialState = {
			isLogin: false,
			username: '',
			email: '',
		};
		const action = {
			type: SET_LOGIN.type,
			payload: {
				username: 'JohnDoe',
				email: 'john.doe@example.com',
			},
		};
		const nextState = AuthSlice.reducer(initialState, action);
		expect(nextState).toEqual({
			isLogin: true,
			username: 'JohnDoe',
			email: 'john.doe@example.com',
		});
	});

	it('should handle RESET_AUTH', () => {
		const currentState = {
			isLogin: true,
			username: 'JohnDoe',
			email: 'john.doe@example.com',
		};
		const action = { type: RESET_AUTH.type };
		const nextState = AuthSlice.reducer(currentState, action);
		expect(nextState).toEqual({
			isLogin: false,
			username: '',
			email: '',
		});
	});
});

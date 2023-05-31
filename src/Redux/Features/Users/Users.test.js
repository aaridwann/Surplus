import { RegisterSlice, SET_REGISTER } from './Users';

describe('RegisterSlice reducers', () => {
	it('should handle SET_REGISTER', () => {
		const initialState = [];
		const action = {
			type: SET_REGISTER.type,
			payload: {
				username: 'johnDoe',
				email: 'johndoe@example.com',
			},
		};
		const nextState = RegisterSlice.reducer(initialState, action);
		expect(nextState).toEqual([
			{
				username: 'johnDoe',
				email: 'johndoe@example.com',
			},
		]);
	});
});

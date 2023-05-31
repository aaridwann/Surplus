jest.mock('axios', () => ({
	create: jest.fn(() => ({
		interceptors: {
			response: {
				use: jest.fn(),
			},
			request: {
				use: jest.fn(),
			},
		},
	})),
}));

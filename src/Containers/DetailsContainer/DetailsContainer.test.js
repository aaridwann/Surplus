import React from 'react';
import { render } from '@testing-library/react-native';
import DetailsContainer from './DetailsContainer';

jest.mock('expo-linear-gradient', () => ({
	LinearGradient: 'linear',
}));

describe('DetailsContainer', () => {
	const mockRoute = {
		params: {
			picture: {
				large: 'mock-image-url',
			},
			name: {
				first: 'John',
			},
			email: 'john@example.com',
		},
	};

	test('renders correctly', () => {
		const { toJSON } = render(<DetailsContainer route={mockRoute} />);
		expect(toJSON()).toMatchSnapshot();
	});
});

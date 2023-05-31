import { render } from '@testing-library/react-native';
import React from 'react';
import HomeComponent from './HomeComponent';

// beforeAll(() => {
jest.mock('@expo/vector-icons/AntDesign', () => ({
	__esModule: true,
	default: 'AntDesign',
}));
// });

describe('HomeComponent', () => {
	it('Snapshot', () => {
		expect(render(<HomeComponent />)).toMatchSnapshot();
	});
});

import React from 'react';
import { render } from '@testing-library/react-native';
import { HomeStack, UnAuthorizeStack } from './Screen';

// At the top of your test file

beforeAll(() => {
	jest.mock(
		'@react-navigation/elements/lib/commonjs/assets/back-icon.png',
		() => 'ImageMock'
	);
});

// Unit tests for HomeStack and UnAuthorizeStack
// ...

describe('HomeStack', () => {
	test('renders screens correctly', () => {
		const { getByText } = render(<HomeStack />);

		// Test each screen in HomeStack
		expect(getByText('Home')).toBeTruthy();
		expect(getByText('Detail')).toBeTruthy();
	});
});

describe('UnAuthorizeStack', () => {
	test('renders screens correctly', () => {
		const { getByText } = render(<UnAuthorizeStack />);

		// Test each screen in UnAuthorizeStack
		expect(getByText('Login')).toBeTruthy();
		expect(getByText('Registration')).toBeTruthy();
	});
});

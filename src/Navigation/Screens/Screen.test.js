import React from 'react';
import { render } from '@testing-library/react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStack, UnAuthorizeStack } from './Screen';
import { NavigationContainer } from '@react-navigation/native';
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

describe('Navigation Stack', () => {
	test('HomeStack renders correctly', () => {
		const Stack = createNativeStackNavigator();
		const { getByText } = render(
			<NavigationContainer>
				<Stack.Navigator>
					<HomeStack />
				</Stack.Navigator>
			</NavigationContainer>
		);

		expect(getByText('HomeContainer')).toBeDefined();
	});

	test('UnAuthorizeStack renders correctly', () => {
		const Stack = createNativeStackNavigator();
		const { getByText } = render(
			<NavigationContainer>
				<Stack.Navigator>
					<UnAuthorizeStack />
				</Stack.Navigator>
			</NavigationContainer>
		);

		expect(getByText('LoginContainer')).toBeDefined();
	});
});

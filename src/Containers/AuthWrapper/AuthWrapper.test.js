import React from 'react';
import { render } from '@testing-library/react-native';
import AuthWrapper from './AuthWrapper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

jest.mock('@react-navigation/native-stack', () => ({
	createNativeStackNavigator: jest.fn(),
}));

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
}));

jest.mock('../Login/Login.Container', () => 'LoginContainer');
jest.mock('../ProfileContainer/ProfileContainer', () => 'ProfileContainer');
jest.mock(
	'../Registration/RegistrationContainer',
	() => 'RegistrationContainer'
);
jest.mock('../../Navigation/Screens/Screen', () => ({
	HomeStack: 'HomeStack',
}));

jest.mock('@react-navigation/bottom-tabs', () => ({
	createBottomTabNavigator: jest.fn(),
}));

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');

describe('AuthWrapper', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('renders StackAuthorize when user is logged in', () => {
		useSelector.mockReturnValue({ auth: { isLogin: true } });

		const Tab = {
			Navigator: jest.fn(),
			Screen: jest.fn(),
		};

		createNativeStackNavigator.mockReturnValue(jest.fn());

		createBottomTabNavigator.mockReturnValue(Tab);

		const { toJSON } = render(<AuthWrapper />);
		expect(toJSON()).toMatchSnapshot();
	});

	test('renders StackNotLogin when user is not logged in', () => {
		useSelector.mockReturnValue({ auth: { isLogin: false } });

		createNativeStackNavigator.mockReturnValue(jest.fn());

		const { toJSON } = render(<AuthWrapper />);
		expect(toJSON()).toMatchSnapshot();
	});
});

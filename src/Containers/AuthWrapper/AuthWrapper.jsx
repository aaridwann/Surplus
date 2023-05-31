import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import LoginContainer from '../Login/Login.Container';
import { HomeStack } from '../../Navigation/Screens/Screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Constants from '../../Utils/Constants/Constants';
import ProfileContainer from '../ProfileContainer/ProfileContainer';
import RegistrationContainer from '../Registration/RegistrationContainer';

const AuthWrapper = () => {
	const { auth } = useSelector((state) => state);
	const { isLogin } = auth;
	const Stack = createNativeStackNavigator();

	useEffect(() => {}, [isLogin]);

	const Tab = createBottomTabNavigator();

	const StackNotLogin = () => (
		<Stack.Navigator>
			<Stack.Screen
				options={{ headerShown: false }}
				name="Login"
				component={LoginContainer}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name="Registration"
				component={RegistrationContainer}
			/>
		</Stack.Navigator>
	);

	const StackAuthorize = () => {
		return (
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						if (route.name === 'Home') {
							iconName = focused ? 'home' : 'home-outline';
						} else if (route.name === 'Profile') {
							iconName = focused ? 'person-circle' : 'person-circle-outline';
						}

						// You can return any component that you like here!
						return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: Constants.Colors.LightGreenSurplus,
					tabBarInactiveTintColor: 'gray',
				})}
			>
				<React.Fragment>
					<Tab.Screen
						key={'Home'}
						options={{ headerShown: false }}
						name={'Home'}
						component={HomeStack}
					/>
					<Tab.Screen
						key={'Profile'}
						options={{ headerShown: false }}
						name={'Profile'}
						component={ProfileContainer}
					/>
				</React.Fragment>
			</Tab.Navigator>
		);
	};

	return isLogin ? StackAuthorize() : StackNotLogin();
};
export default AuthWrapper;

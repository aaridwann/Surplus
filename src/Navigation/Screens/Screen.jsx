import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeContainer from '../../Containers/HomeContainer/HomeContainer';
import React from 'react';
import DetailsContainer from '../../Containers/DetailsContainer/DetailsContainer';
import LoginContainer from '../../Containers/Login/Login.Container';
import RegistrationContainer from '../../Containers/Registration/RegistrationContainer';

const Stack = createNativeStackNavigator();

const ScreenConfig = [
	{
		screenName: 'Home',
		screenComponent: HomeContainer,
	},
	{
		screenName: 'Detail',
		screenComponent: DetailsContainer,
	},
];

const ScreenUnAuthorize = [
	{
		screenName: 'Login',
		screenComponent: LoginContainer,
	},
	{
		screenName: 'Registration',
		screenComponent: RegistrationContainer,
	},
];

export const HomeStack = () => {
	return (
		<Stack.Navigator>
			{ScreenConfig.map(({ screenName, screenComponent }) => (
				<Stack.Screen
					options={{ headerShown: false }}
					key={screenName}
					name={screenName}
					component={screenComponent}
				/>
			))}
		</Stack.Navigator>
	);
};

export const UnAuthorizeStack = () => (
	<Stack.Navigator>
		{ScreenUnAuthorize.map(({ screenName, screenComponent }) => (
			<Stack.Screen
				options={{ headerShown: false }}
				key={screenName}
				name={screenName}
				component={screenComponent}
			/>
		))}
	</Stack.Navigator>
);

export default ScreenConfig;

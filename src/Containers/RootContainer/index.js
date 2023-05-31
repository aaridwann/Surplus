import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import ToastComponent from '../../Components/ToastComponent/ToastComponent';
import Constants from '../../Utils/Constants/Constants';

export function RootContainer({ children }) {
	return (
		<ScreenWrapper
			barStyle={'light-content'}
			statusBarColor={Constants.Colors.LightGreenSurplus}
		>
			<View
				style={{
					zIndex: 100,
					position: 'absolute',
					width: '100%',
					backgroundColor: 'red',
				}}
			>
				{ToastComponent()}
			</View>
			{children}
		</ScreenWrapper>
	);
}

RootContainer.propTypes = {
	children: PropTypes.node,
};

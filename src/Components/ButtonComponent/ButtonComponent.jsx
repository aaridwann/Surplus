import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';
import Constants from '../../Utils/Constants/Constants';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
	TouchableOpacity
);

const ButtonComponent = ({ title, onPress, disable }) => {
	const [scaleValue] = useState(new Animated.Value(1));

	const handlePress = () => {
		Animated.sequence([
			Animated.timing(scaleValue, {
				toValue: 0.8,
				duration: 100,
				useNativeDriver: false,
			}),
			Animated.timing(scaleValue, {
				toValue: 1,
				duration: 100,
				useNativeDriver: false,
			}),
		]).start(() => {
			if (onPress) {
				onPress();
			}
		});
	};

	const buttonStyle = {
		transform: [{ scale: scaleValue }],
	};

	const styles = StyleSheet.create({
		button: {
			borderColor: Constants.Colors.LightGreenSurplus,
			opacity: disable ? 0.2 : 1,
			borderWidth: 2,
			backgroundColor: 'transparent',
			paddingHorizontal: 20,
			paddingVertical: 10,
			borderRadius: 10,
		},
		buttonText: {
			color: Constants.Colors.LightGreenSurplus,
			fontWeight: 'bold',
			textAlign: 'center',
		},
	});

	return (
		<AnimatedTouchableOpacity
			testID={'button'}
			style={[styles.button, buttonStyle]}
			onPress={handlePress}
			activeOpacity={0.8}
			disabled={disable}
		>
			<Text testID="title" style={styles.buttonText}>
				{title}
			</Text>
		</AnimatedTouchableOpacity>
	);
};

export default ButtonComponent;

ButtonComponent.propTypes = {
	title: PropTypes.string,
	onPress: PropTypes.func,
	disable: PropTypes.bool,
};

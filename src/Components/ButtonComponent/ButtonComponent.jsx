import React, { useState } from 'react';
import { TouchableOpacity, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';
import styles from './ButtonComponent.Style';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
	TouchableOpacity
);

const ButtonComponent = ({ title, onPress, disable }) => {
	const [scaleValue] = useState(new Animated.Value(1));

	const handlePress = () => {
		Animated.sequence([
			Animated.timing(scaleValue, {
				toValue: 0.5,
				duration: 100,
				useNativeDriver: true,
			}),
			Animated.timing(scaleValue, {
				toValue: 1,
				duration: 100,
				useNativeDriver: true,
			}),
		]).start(() => {
			if (onPress) {
				onPress();
			}
		});
	};

	const buttonStyle = {
		opacity: disable ? 0.3 : 1,
		transform: [{ scale: scaleValue }],
	};

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

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native';
import Constants from '../../Utils/Constants/Constants';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const AnimatedInputWithLabel = ({
	value,
	label,
	onChange,
	validation,
	password,
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const [error, setError] = useState('');
	const inputScale = isFocused ? 1.1 : 1;

	const handleFocus = () => {
		setIsFocused(true);
		setError('');
	};

	const handleBlur = (text) => {
		setIsFocused(false);
		const hasError = text?.length < 5 || validation;
		setError(
			hasError ? validation || 'Input harus memiliki setidaknya 5 karakter' : ''
		);
	};

	return (
		<View style={styles.container}>
			<Text style={[styles.label, { transform: [{ scale: inputScale }] }]}>
				{label}
			</Text>
			<AnimatedTextInput
				value={value}
				secureTextEntry={password}
				onChangeText={onChange}
				autoCapitalize="none"
				style={[
					styles.input,
					{
						borderColor: error ? 'red' : '#ccc',
					},
				]}
				onFocus={handleFocus}
				onBlur={(e) => handleBlur(e.nativeEvent.text)}
			/>
			{error ? <Text style={styles.errorText}>{error}</Text> : null}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},
	label: {
		color: Constants.Colors.LightGreenSurplus,
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	input: {
		height: 40,
		borderWidth: 1,
		paddingHorizontal: 10,
		fontSize: 16,
	},
	errorText: {
		color: 'red',
		marginTop: 5,
	},
});

AnimatedInputWithLabel.propTypes = {
	label: PropTypes.string,
	onChange: PropTypes.func,
	validation: PropTypes.string,
	password: PropTypes.bool,
	value: PropTypes.string,
};

export default AnimatedInputWithLabel;

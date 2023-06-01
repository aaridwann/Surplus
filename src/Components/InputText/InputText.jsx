import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Animated, Text, TextInput, View } from 'react-native';
import styles from './InputText.Style';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const AnimatedInputWithLabel = ({
	value,
	label,
	onChange,
	validation,
	password,
	placeHolder = '',
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
				placeholder={placeHolder}
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

AnimatedInputWithLabel.propTypes = {
	label: PropTypes.string,
	onChange: PropTypes.func,
	validation: PropTypes.string,
	password: PropTypes.bool,
	value: PropTypes.string,
	placeHolder: PropTypes.string,
};

export default AnimatedInputWithLabel;

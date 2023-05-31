import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ size, style, ...props }) => {
	const textSize = size ? { fontSize: size } : {};

	return <Text style={[styles.text, textSize, style]} {...props} />;
};

const styles = StyleSheet.create({
	text: {
		fontSize: 16,
	},
});

CustomText.propTypes = {
	size: PropTypes.number,
	style: PropTypes.object,
};

export default CustomText;

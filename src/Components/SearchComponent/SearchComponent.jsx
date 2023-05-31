import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { scaleSize } from '../../Utils/Scale/Scale';
import PropTypes from 'prop-types';
import styles from './Styles';

const _renderButton = (onPress) => (
	<TouchableOpacity testID='search-button' onPress={onPress}>
		<Text>
			<Octicons name="search" size={scaleSize(20)} color="black" />;
		</Text>
	</TouchableOpacity>
);

const _renderInput = (onChange) => (
	<TextInput testID='search-input' onChangeText={onChange} style={styles.input} />
);

function SearchComponent({ onChange, onPress }) {
	return (
		<View testID='search-container' style={styles.container}>
			{_renderInput(onChange)}
			{_renderButton(onPress)}
		</View>
	);
}

export default SearchComponent;

SearchComponent.propTypes = {
	onChange: PropTypes.func,
	onPress: PropTypes.func,
};

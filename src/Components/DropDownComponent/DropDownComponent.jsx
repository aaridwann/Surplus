import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import PropTypes from 'prop-types';
import { scaleWidth } from '../../Utils/Scale/Scale';
import { SelectCountry } from 'react-native-element-dropdown';
import Constants from '../../Utils/Constants/Constants';
import { get } from 'lodash';

const BaseColor = get(Constants, 'Colors.LightGreenSurplus', '');

const DropdownComponent = ({
	label,
	list,
	width,
	backgroundColor,
	textColor,
	selectValue,
}) => {
	const [value, setValue] = useState(null);
	const [isFocus, setIsFocus] = useState(false);

	useEffect(() => {
		selectValue(value);
	}, [value]);

	const renderLabel = () => {
		if (value || isFocus) {
			return (
				<Text style={[styles.label, isFocus && { color: 'blue' }]}>
					{label || 'Dropdown label'}
				</Text>
			);
		}
		return null;
	};

	const styles = StyleSheet.create({
		container: {
			backgroundColor: 'transparent',
			padding: 16,
		},
		dropdown: {
			height: 50,
			backgroundColor: backgroundColor || BaseColor,
			width: width || scaleWidth(150),
			borderWidth: backgroundColor === 'transparent' && 0.8,
			borderColor: backgroundColor === 'transparent' && BaseColor,
			borderRadius: 8,
			paddingHorizontal: 8,
		},
		icon: {
			marginRight: 5,
			color: BaseColor,
		},
		label: {
			position: 'absolute',
			backgroundColor: BaseColor,
			left: 22,
			top: 8,
			zIndex: 999,
			paddingHorizontal: 8,
			fontSize: 14,
		},
		placeholderStyle: {
			fontSize: 16,
			color: textColor || BaseColor,
		},
		selectedTextStyle: {
			fontSize: 16,
			color: textColor || BaseColor,
		},
		iconStyle: {
			color: BaseColor,
			width: 20,
			height: 20,
		},
		inputSearchStyle: {
			height: 40,
			fontSize: 16,
		},
	});

	return (
		<View style={styles.container}>
			{renderLabel()}
			<Dropdown
				style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
				placeholderStyle={styles.placeholderStyle}
				selectedTextStyle={styles.selectedTextStyle}
				inputSearchStyle={styles.inputSearchStyle}
				iconStyle={styles.iconStyle}
				data={list}
				search
				maxHeight={300}
				labelField="label"
				valueField="value"
				placeholder={!isFocus ? 'Select item' : '...'}
				searchPlaceholder="Search..."
				value={value}
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)}
				onChange={(item) => {
					setValue(item.value);
					setIsFocus(false);
				}}
				renderLeftIcon={() => (
					<AntDesign
						style={styles.icon}
						color={isFocus ? 'blue' : 'black'}
						name="Safety"
						size={20}
					/>
				)}
			/>
		</View>
	);
};

export default DropdownComponent;

DropdownComponent.propTypes = {
	label: PropTypes.string,
	list: PropTypes.array,
	width: PropTypes.number,
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
	selectValue: PropTypes.func,
};

/**
 * Dropdown Country with logo
 */

export const DropDownCountry = ({ dataCountry, selectValue }) => {
	const [country, setCountry] = useState('');

	useEffect(() => {
		selectValue(country);
	}, [country]);

	const styles = StyleSheet.create({
		dropdown: {
			width: scaleWidth(150),
			margin: 16,
			height: 50,
			color: 'gray',
			borderBottomColor: BaseColor,
			borderBottomWidth: 0.5,
		},
		imageStyle: {
			width: 24,
			height: 24,
			borderRadius: scaleWidth(50) / 2,
		},
		placeholderStyle: {
			color: BaseColor,
			fontSize: 16,
		},
		selectedTextStyle: {
			color: BaseColor,
			fontSize: 16,
			marginLeft: 8,
		},
		iconStyle: {
			color: 'gray',
			width: 20,
			height: 20,
		},
		inputSearchStyle: {
			height: 40,
			fontSize: 16,
		},
	});

	return (
		<SelectCountry
			style={styles.dropdown}
			selectedTextStyle={styles.selectedTextStyle}
			placeholderStyle={styles.placeholderStyle}
			imageStyle={styles.imageStyle}
			inputSearchStyle={styles.inputSearchStyle}
			iconStyle={styles.iconStyle}
			search
			maxHeight={200}
			value={country}
			data={dataCountry}
			valueField="value"
			labelField="lable"
			imageField="image"
			placeholder="Select country"
			searchPlaceholder="Search..."
			onChange={(e) => {
				setCountry(e.value);
			}}
		/>
	);
};

DropDownCountry.propTypes = {
	dataCountry: PropTypes.array,
	selectValue: PropTypes.func,
};

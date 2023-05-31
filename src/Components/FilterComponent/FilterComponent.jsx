import React from 'react';
import { View } from 'react-native';
import Constants from '../../Utils/Constants/Constants';
import DropdownComponent, {
	DropDownCountry,
} from '../DropDownComponent/DropDownComponent';
import { list_country, list_gender } from './FilterConfig';
import PropTypes from 'prop-types';

const DropDownContainer = ({ selectCountry, selectGender }) => (
	<View
		style={{
			zIndex: 2,
			flexDirection: 'row',
			width: '95%',
			alignItems:'center',
			justifyContent:'center',
			padding: 2,
			backgroundColor: 'transparent',
			borderWidth:1,
			borderColor: Constants.Colors.LightGreenSurplus,
		}}
	>
		{DropdownComponent({
			selectValue: (e) => selectGender(e),
			backgroundColor: 'transparent',
			label: 'Gender',
			list: list_gender,
		})}
		{DropDownCountry({
			selectValue: (e) => selectCountry(e),
			dataCountry: list_country,
		})}
	</View>
);

export default DropDownContainer;

DropDownContainer.propTypes = {
	selectCountry: PropTypes.func,
	selectGender: PropTypes.func,
};

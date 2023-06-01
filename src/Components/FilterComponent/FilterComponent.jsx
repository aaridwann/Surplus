import React from 'react';
import DropdownComponent, {
	DropDownCountry,
} from '../DropDownComponent/DropDownComponent';
import { list_country, list_gender } from './FilterConfig';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import styles from './FilterComponent.Style';

const DropDownContainer = ({ selectCountry, selectGender }) => (
	<Animatable.View
		animation={'slideInLeft'}
		duration={1200}
		easing={'ease-in-out'}
		style={styles}
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
	</Animatable.View>
);

export default DropDownContainer;

DropDownContainer.propTypes = {
	selectCountry: PropTypes.func,
	selectGender: PropTypes.func,
};

import React from 'react';
import { render } from '@testing-library/react-native';
import DropDownContainer from './FilterComponent';

jest.mock('@expo/vector-icons/AntDesign', () => ({
	__esModule: true,
	default: 'AntDesign',
}));

describe('DropDownContainer', () => {
	test('renders correctly', () => {
		const { toJSON } = render(
			<DropDownContainer selectCountry={jest.fn()} selectGender={jest.fn()} />
		);
		expect(toJSON()).toMatchSnapshot();
	});
});

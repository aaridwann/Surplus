import React from 'react';
import { render } from '@testing-library/react-native';
import DropdownComponent from './DropDownComponent';

describe('DropdownComponent', () => {
	const mockList = [
		{ label: 'Option 1', value: 'option1' },
		{ label: 'Option 2', value: 'option2' },
		{ label: 'Option 3', value: 'option3' },
	];

	it('renders correctly', () => {
		const { toJSON } = render(
			<DropdownComponent
				label="Dropdown"
				list={mockList}
				width={200}
				backgroundColor="green"
				textColor="white"
				selectValue={jest.fn()}
			/>
		);
		expect(toJSON()).toMatchSnapshot();
	});
});

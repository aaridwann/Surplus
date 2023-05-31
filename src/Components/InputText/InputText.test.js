import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AnimatedInputWithLabel from './InputText';

describe('AnimatedInputWithLabel', () => {
	test('should render correctly with default props', () => {
		const { getByText, getByPlaceholderText } = render(
			<AnimatedInputWithLabel label="Label" />
		);

		expect(getByText('Label')).toBeDefined();
		expect(getByPlaceholderText('')).toBeDefined();
	});

	test('should render label with custom text', () => {
		const label = 'Custom Label';
		const { getByText } = render(<AnimatedInputWithLabel label={label} />);

		expect(getByText(label)).toBeDefined();
	});

	test('should update input value correctly', () => {
		const onChangeMock = jest.fn();
		const { getByPlaceholderText } = render(
			<AnimatedInputWithLabel label="Label" onChange={onChangeMock} />
		);
		const input = getByPlaceholderText('');

		fireEvent.changeText(input, 'New Value');

		expect(onChangeMock).toHaveBeenCalledWith('New Value');
	});

	// Add more test cases as needed
});

// Snapshot test
describe('AnimatedInputWithLabel snapshots', () => {
	test('should match the snapshot', () => {
		const { toJSON } = render(<AnimatedInputWithLabel label="Label" />);

		expect(toJSON()).toMatchSnapshot();
	});
});

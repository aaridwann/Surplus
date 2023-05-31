import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import ButtonComponent from './ButtonComponent';

describe('ButtonComponent', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	test('renders button with title', () => {
		const onPressMock = jest.fn();
		const { getByTestId, getByText } = render(
			<ButtonComponent
				title="Test Button"
				onPress={onPressMock}
				disable={false}
			/>
		);

		const button = getByTestId('button');
		const title = getByTestId('title');

		expect(button).toBeDefined();
		expect(title).toBeDefined();
		expect(getByText('Test Button')).toBeTruthy();
	});

	test('calls onPress function when button is pressed', () => {
		const onPressMock = jest.fn();
		const { getByTestId } = render(
			<ButtonComponent
				title="Test Button"
				onPress={onPressMock}
				disable={false}
			/>
		);

		const button = getByTestId('button');

		fireEvent.press(button);

		act(() => {
			jest.runAllTimers();
		});

		expect(onPressMock).toHaveBeenCalledTimes(1);
	});

	test('disables button when disable prop is true', () => {
		const onPressMock = jest.fn();
		const { getByTestId } = render(
			<ButtonComponent
				title="Test Button"
				onPress={onPressMock}
				disable={true}
			/>
		);

		const button = getByTestId('button');

		act(() => {
			jest.runAllTimers();
		});

		expect(button.props.style.transform[0].scale).toEqual(1); // Check scale value
		expect(button.props.style.borderColor).toBe('#50b8a8'); // Check borderColor
		expect(button.props.style.opacity).toBe(0.2); // Check opacity
	});
});

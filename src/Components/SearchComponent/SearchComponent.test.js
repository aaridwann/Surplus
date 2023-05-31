import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchComponent from './SearchComponent';

describe('SearchComponent', () => {
	it('snapshot', () => {
		expect(
			render(<SearchComponent onPress={jest.fn()} onChange={jest.fn()} />)
		).toMatchSnapshot();
	});

	it('renders correctly', () => {
		const { getByTestId } = render(<SearchComponent />);
		const container = getByTestId('search-container');
		expect(container).toBeTruthy();
	});

	it('triggers onChange event', () => {
		const handleChange = jest.fn();
		const { getByTestId } = render(<SearchComponent onChange={handleChange} />);
		const input = getByTestId('search-input');
		fireEvent.changeText(input, 'example');
		expect(handleChange).toHaveBeenCalledWith('example');
	});

	it('triggers onPress event', () => {
		const handlePress = jest.fn();
		const { getByTestId } = render(<SearchComponent onPress={handlePress} />);
		const button = getByTestId('search-button');
		fireEvent.press(button);
		expect(handlePress).toHaveBeenCalled();
	});
});

import React from 'react';
import { render } from '@testing-library/react-native';
import HighlightComponent from './HighlightComponent';

const data = [
	{
		picture: {
			medium: 'https://example.com/image1.jpg',
		},
		name: {
			first: 'John',
		},
	},
	{
		picture: {
			medium: 'https://example.com/image2.jpg',
		},
		name: {
			first: 'Jane',
		},
	},
];

describe('HighlightComponent', () => {
	it('should render correctly', () => {
		const { toJSON } = render(<HighlightComponent data={data} />);
		expect(toJSON()).toMatchSnapshot();
	});

	it('should render the correct number of items', () => {
		const { getAllByTestId } = render(<HighlightComponent data={data} />);
		const items = getAllByTestId(/^highlight-item-/);
		expect(items).toHaveLength(2);
	});
});

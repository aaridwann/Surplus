import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FeedsComponent from './Feeds';

const data = [
	{
		picture: {
			large: 'https://example.com/image1.jpg',
		},
		name: {
			first: 'John',
		},
	},
	{
		picture: {
			large: 'https://example.com/image2.jpg',
		},
		name: {
			first: 'Jane',
		},
	},
];

describe('FeedsComponent', () => {
	it('should render the component correctly', () => {
		const onPressMock = jest.fn();
		const { getByTestId, getAllByTestId } = render(
			<FeedsComponent data={data} onPress={onPressMock} />
		);

		const feedsComponent = getByTestId('feeds-component');
		expect(feedsComponent).toBeDefined();

		const feedNames = getAllByTestId('feed-name');
		expect(feedNames).toHaveLength(data.length);

		fireEvent.press(feedNames[0]);
		expect(onPressMock).toHaveBeenCalledWith(data[0]);
	});

	it('should match the snapshot', () => {
		const onPressMock = jest.fn();
		const { toJSON } = render(
			<FeedsComponent data={data} onPress={onPressMock} />
		);

		expect(toJSON()).toMatchSnapshot();
	});
});

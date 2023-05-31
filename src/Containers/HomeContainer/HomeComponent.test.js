import { render } from '@testing-library/react-native';
import React from 'react';
import HomeComponent from './HomeComponent';

describe('HomeComponent', () => {
	beforeAll(() => {
		jest.mock(
			'../../Components/FilterComponent/FilterComponent',
			() => 'Filter'
		);
	});

	const MockData = [
		{
			picture: {
				medium: 'https://example.com/image1.jpg',
				large: 'https://example.com/image1.jpg',
			},
			name: {
				first: 'John',
			},
		},
		{
			picture: {
				medium: 'https://example.com/image2.jpg',
				large: 'https://example.com/image2.jpg',
			},
			name: {
				first: 'Jane',
			},
		},
	];
	const Props = {
		state: {
			loading: false,
			data: MockData,
			dataFeeds: MockData,
			dataFeedsBySearch: [],
			pageFeeds: 3,
			country: '',
			gender: '',
		},
		method: {
			LoadMore: jest.fn(),
			Search: jest.fn(),
			SelectFilter: jest.fn(),
			GoToDetails: jest.fn(),
			Logout: jest.fn(),
		},
	};

	it('Should snapshot correct layout', () => {
		expect(render(<HomeComponent {...Props} />)).toMatchSnapshot();
	});
});

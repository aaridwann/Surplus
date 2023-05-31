import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import HomeContainer from './HomeContainer';

jest.mock('axios', () => ({
	create: jest.fn(() => ({
		interceptors: {
			response: {
				use: jest.fn(),
			},
			request: {
				use: jest.fn(),
			},
		},
	})),
}));
jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

jest.mock('@expo/vector-icons/AntDesign', () => ({
	__esModule: true,
	default: 'Icon',
}));

describe('HomeContainer', () => {
	test('renders correctly', () => {
		const { getByTestId } = render(<HomeContainer />);
		const homeComponent = getByTestId('home-component');
		expect(homeComponent).toBeDefined();
	});

	test('loads data on mount', async () => {
		const { getByTestId } = render(<HomeContainer />);
		const loadingSpinner = getByTestId('loading-spinner');
		expect(loadingSpinner).toBeDefined();
		await waitFor(() => {
			const homeComponent = getByTestId('home-component');
			expect(homeComponent).toBeDefined();
		});
	});

	test('handles filter selection', () => {
		const { getByTestId } = render(<HomeContainer />);
		const countryFilter = getByTestId('country-filter');
		const genderFilter = getByTestId('gender-filter');
		fireEvent(countryFilter, 'select', 'USA');
		fireEvent(genderFilter, 'select', 'male');
		// Assert the state has been updated with the selected filters
	});

	test('loads more data on scroll', async () => {
		const { getByTestId } = render(<HomeContainer />);
		const scrollView = getByTestId('scroll-view');
		fireEvent.scroll(scrollView, {
			nativeEvent: { contentOffset: { y: 100 } },
		});
		// Assert that more data is loaded
	});

	test('searches data', () => {
		const { getByTestId } = render(<HomeContainer />);
		const searchComponent = getByTestId('search-component');
		fireEvent.changeText(searchComponent, 'John');
		// Assert that the search function is called with the correct value
	});

	test('navigates to details', () => {
		const { getByTestId } = render(<HomeContainer />);
		const feedsComponent = getByTestId('feeds-component');
		fireEvent.press(feedsComponent);
		// Assert that the navigation function is called with the correct parameters
	});

	test('logs out', () => {
		const { getByTestId } = render(<HomeContainer />);
		const logoutButton = getByTestId('logout-button');
		fireEvent.press(logoutButton);
		// Assert that the logout function is called
	});
});

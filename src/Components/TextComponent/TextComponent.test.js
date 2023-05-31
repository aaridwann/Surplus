import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import { useSelector } from 'react-redux';
import ToastComponent from './TextComponent';

// Mock useSelector
jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: jest.fn(),
}));

// Mock react-native-toast-message
jest.mock('react-native-toast-message', () => ({
	show: jest.fn(),
}));

// Snapshot test
describe('ToastComponent Snapshot', () => {
	afterEach(() => {
		cleanup();
		jest.clearAllMocks();
	});

	it('should match the snapshot', () => {
		useSelector.mockReturnValue({
			notification: {
				isShow: true,
				message: 'Test Message',
				description: 'Test Description',
				type: 'info',
			},
		});

		const { UNSAFE_root } = render(<ToastComponent />);
		expect(UNSAFE_root).toMatchSnapshot();
	});
});

import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import { useSelector, useDispatch } from 'react-redux';
import ToastComponent from './ToastComponent';
import { RESET_NOTIFICATION } from '../../Redux/Features/Notification/NotificationFeature';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: jest.fn(),
}));

jest.mock('react-native-toast-message', () => ({
	show: jest.fn(),
}));

jest.mock('../../Redux/Features/Notification/NotificationFeature', () => ({
	RESET_NOTIFICATION: jest.fn(),
}));

afterEach(cleanup);

describe('ToastComponent', () => {
	const mockDispatch = jest.fn();
	const mockShowSelector = jest.fn();
	const mockNotification = {
		isShow: true,
		message: 'Test Message',
		description: 'Test Description',
		type: 'info',
	};

	beforeEach(() => {
		useSelector.mockImplementation((selectorFn) =>
			selectorFn({
				notification: mockNotification,
			})
		);
		useDispatch.mockReturnValue(mockDispatch);
		mockShowSelector.mockReturnValue(mockNotification.isShow);
	});

	it('should show toast when notification is shown', () => {
		render(<ToastComponent />);
		expect(mockShowSelector).toHaveBeenCalled();
		expect(mockDispatch).not.toHaveBeenCalledWith(RESET_NOTIFICATION());
		expect(Toast.show).toHaveBeenCalledWith({
			type: mockNotification.type.toLowerCase(),
			text1: mockNotification.message,
			text2: mockNotification.description,
		});
	});

	it('should reset notification on unmount', () => {
		const { unmount } = render(<ToastComponent />);
		unmount();
		expect(mockDispatch).toHaveBeenCalledWith(RESET_NOTIFICATION());
	});
});

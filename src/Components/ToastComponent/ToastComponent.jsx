import { get } from 'lodash';
import React, { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_NOTIFICATION } from '../../Redux/Features/Notification/NotificationFeature';

function ToastComponent() {
	const { notification } = useSelector((state) => state);
	const dispatch = useDispatch();

	const show = get(notification, 'isShow', false);
	const message = get(notification, 'message', '');
	const description = get(notification, 'description', '');
	const type = get(notification, 'type', 'info');

	const DetectNotification = () => {
		if (show) return showToast(message, type, description);
	};

	const showToast = (message, type, description) =>
		Toast.show({
			type: type.toLowerCase(),
			text1: message,
			text2: description,
		});

	useEffect(() => {
		DetectNotification();

		return () => dispatch(RESET_NOTIFICATION());
	}, [show]);

	return <Toast />;
}

export default ToastComponent;

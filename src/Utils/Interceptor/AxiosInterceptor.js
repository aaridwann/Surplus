import axios from 'axios';
// import { SET_NOTIFICATION } from '../../Redux/Features/Notification/NotificationFeature';

// Add a request interceptor
const AppAxios = axios.create();

AppAxios.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		return config;
	},
	function (error) {
		// Store.dispatch(SET_NOTIFICATION({ type: 'ERROR', message: 'WOOOOYYY' }));
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
AppAxios.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);

export default AppAxios;

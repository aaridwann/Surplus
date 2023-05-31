import { StyleSheet } from 'react-native';
import Constants from '../../Utils/Constants/Constants';
import { scaleFont, scaleSize, scaleWidth } from '../../Utils/Scale/Scale';

var styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingVertical: 20,
	},
	title: {
		fontSize: 40,
	},
	titleRegister: {
		fontSize: scaleFont(18),
		textAlign: 'center',
		color: 'gray',
	},
	wrapper: {},
	img: {
		width: '100%',
		height: '100%',
	},
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9DD6EB',
	},
	text: {
		position: 'absolute',
		zIndex: 5,
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
	wrapperButtonBack: {
		padding: scaleSize(30),
		justifyContent: 'space-between',
		height: '90%',
	},
	buttonBack: {
		position: 'absolute',
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconBack: { marginLeft: scaleSize(15), marginRight: scaleSize(5) },
	titleBack: { color: 'gray', fontWeight: '600' },
	buttonLogin: {
		opacity: 0.6,
		zIndex: 5,
		padding: 20,
		width: scaleWidth(250),
		backgroundColor: Constants.Colors.LightGreenSurplus,
	},
	titleLogin: {
		opacity: 1,
		textAlign: 'center',
		fontSize: scaleFont(20),
		color: 'white',
	},
	swiper: {
		container: {
			position: 'absolute',
			zIndex: 0,
			width: '100%',
			margin: 'auto',
		},
	},
	wrapperLogin: {
		padding: scaleSize(30),
		justifyContent: 'space-between',
		height: '90%',
	},
	wrapperButtonLogin: { width: '100%' },
	titleButtonLogin: {
		fontSize: scaleFont(14),
		color: 'gray',
		textAlign: 'center',
		marginTop: 10,
	},
});

export default styles;

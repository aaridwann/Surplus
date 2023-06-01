import { StyleSheet } from 'react-native';
import { scaleFont } from '../../Utils/Scale/Scale';
import Constants from '../../Utils/Constants/Constants';

const styles = StyleSheet.create({
	webView: {
		flex: 1,
		zIndex: -1,
		top: 0,
		width: '100%',
	},
	container: {
		width: '100%',
		flex: 1,
		backgroundColor: Constants.Colors.LightGreenSurplus,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: scaleFont(30),
		color: 'white',
		fontWeight: '700',
	},
	greeting: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	hello: {
		fontSize: scaleFont(25),
		color: 'white',
	},
	name: {
		fontSize: scaleFont(40),
		color: 'white',
		fontWeight: '600',
	},
	maintenance: {
		fontSize: scaleFont(15),
		color: 'white',
		textTransform: 'lowercase',
	},
});

export default styles;

import { StyleSheet } from 'react-native';
import { scaleWidth } from '../../Utils/Scale/Scale';
import Constants from '../../Utils/Constants/Constants';
import { get } from 'lodash';

const BaseColor = get(Constants, 'Colors.LightGreenSurplus', '');

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
		padding: 16,
	},
	dropdown: {
		height: 50,
		backgroundColor: (backgroundColor) => backgroundColor || BaseColor,
		width: (width) => width || scaleWidth(150),
		borderWidth: (backgroundColor) => backgroundColor === 'transparent' && 0.8,
		borderColor: (backgroundColor) =>
			backgroundColor === 'transparent' && BaseColor,
		borderRadius: 8,
		paddingHorizontal: 8,
	},
	icon: {
		marginRight: 5,
		color: BaseColor,
	},
	label: {
		position: 'absolute',
		backgroundColor: BaseColor,
		left: 22,
		top: 8,
		zIndex: 999,
		paddingHorizontal: 8,
		fontSize: 14,
	},
	placeholderStyle: {
		fontSize: 16,
		color: (textColor) => textColor || BaseColor,
	},
	selectedTextStyle: {
		fontSize: 16,
		color: (textColor) => textColor || BaseColor,
	},
	iconStyle: {
		color: BaseColor,
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},
	imageStyle: {
		width: 24,
		height: 24,
		borderRadius: scaleWidth(50) / 2,
	},
});

export default styles;

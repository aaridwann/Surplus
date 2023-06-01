import { StyleSheet } from 'react-native';
import Constants from '../../Utils/Constants/Constants';
import { scaleFont, scaleHeight, scaleSize } from '../../Utils/Scale/Scale';

const styles = StyleSheet.create({
	container: {
		minHeight: scaleHeight(80),
		paddingVertical: scaleSize(10),
		backgroundColor: 'white',
		width: '100%',
		padding: scaleSize(8),
	},
	title: {
		fontSize: scaleSize(15),
		fontWeight: '700',
		color: Constants.Colors.LightGreenSurplus,
	},
	itemContainer: {
		marginHorizontal: 8,
		alignItems: 'center',
		color: 'gray',
	},
	image: {
		borderWidth: 2.5,
		borderColor: Constants.Colors.LightGreenSurplus,
		borderRadius: scaleHeight(50) / 2,
		backgroundColor: Constants.Colors.LightGreenSurplus,
		width: scaleHeight(50),
		height: scaleHeight(50),
	},
	text: {
		fontSize: scaleFont(15),
		marginVertical: 4,
		color: Constants.Colors.LightGreenSurplus,
		fontWeight: '500',
	},
});

export default styles;

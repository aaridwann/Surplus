import { StyleSheet } from 'react-native';
import Constants from '../../Utils/Constants/Constants';
import { scaleFont, scaleHeight, scaleWidth } from '../../Utils/Scale/Scale';

const styles = StyleSheet.create({
	headWrapper: {
		width: '100%',
		height: scaleHeight(170),
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Constants.Colors.LightGreenSurplus,
	},
	img: {
		borderWidth: 5,
		borderColor: 'white',
		width: 120,
		height: 120,
		backgroundColor: 'white',
		borderRadius: scaleWidth(150) / 2,
	},
	username: {
		fontSize: scaleFont(30),
		color: 'white',
	},
	sectionWrapper: {
		width: '100%',
		marginVertical: 10,
		height: scaleHeight(80),
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: scaleHeight(10),
		borderBottomWidth: 1.2,
		borderBottomColor: 'gray',
	},
	sectionContainer: {
		height: '100%',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: scaleFont(20),
	},
	desc: {
		fontSize: scaleFont(12),
	},
	content: {
		width: '100%',
		height: '100%',
		padding: 8,
		backgroundColor: '#EEEDE7',
	},
});

export default styles;

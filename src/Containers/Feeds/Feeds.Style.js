import { StyleSheet } from 'react-native';
import { scaleFont, scaleHeight, scaleWidth } from '../../Utils/Scale/Scale';
import Constants from '../../Utils/Constants/Constants';

const styles = StyleSheet.create({
	content: {
		wrapper: (genap) => ({
			width: scaleWidth(170),
			height: scaleHeight(genap ? 150 : 100),
			backgroundColor: Constants.Colors.LightGreenSurplus,
			margin: 5,
			alignItems: 'center',
			justifyContent: 'center',
			overflow: 'hidden',
		}),
		img: { height: '100%', width: '100%', margin: 4 },
		title: {
			color: 'white',
			margin: 4,
			textTransform: 'capitalize',
			fontSize: scaleFont(30),
			alignSelf: 'flex-start',
			justifyContent: 'flex-start',
			position: 'absolute',
			bottom: 0,
		},
	},
	feedsWrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
});

export default styles;

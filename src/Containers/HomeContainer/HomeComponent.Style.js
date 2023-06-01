import {
	scaleFont,
	scaleHeight,
	scaleSize,
	scaleWidth,
} from '../../Utils/Scale/Scale';
import Constants from '../../Utils/Constants/Constants';

const Styles = {
	background: {
		container: {
			width: '100%',
			backgroundColor: Constants.Colors.LightGreenSurplus,
			height: scaleHeight(75),
			borderBottomEndRadius: 90,
			alignItems: 'center',
		},
		leftContentWrapper: {
			position: 'absolute',
			left: 0,
			margin: scaleWidth(10),
			alignItems: 'center',
			color: 'white',
			flexDirection: 'row',
		},
		icon: {
			margin: scaleWidth(5),
		},
		username: {
			textTransform: 'capitalize',
			color: 'white',
			fontWeight: '800',
			fontSize: scaleFont(20),
		},
		img: {
			alignSelf: 'center',
			width: scaleHeight(50),
			height: scaleSize(50),
		},
		optionWrapper: {
			position: 'absolute',
			right: 0,
			width: scaleWidth(180),
			height: scaleHeight(40),
			alignItems: 'center',
			justifyContent: 'flex-end',
			flexDirection: 'row',
		},
		optionsText: {
			backgroundColor: 'white',
			padding: scaleSize(10),
			color: 'gray',
			paddingHorizontal: scaleSize(20),
		},
		ellipsisIcon: { marginRight: scaleWidth(15) },
	},
	highlightWrapper: {
		width: '100%',
		marginTop: scaleHeight(35),
	},
	feedsWrapper: { marginTop: scaleHeight(10) },
	container: {
		backgroundColor: 'white',
		color: 'gray',
		flex: 1,
	},
	scrollViewContainer: {
		alignItems: 'center',
		width: '100%',
	},
	title: {
		marginHorizontal: 10,
		alignSelf: 'flex-start',
		position: 'absolute',
		top: scaleHeight(20),
	},
	searchContainer: {
		zIndex: 2,
		position: 'absolute',
		top: 20,
		width: '100%',
		alignItems: 'center',
	},
};

export default Styles;

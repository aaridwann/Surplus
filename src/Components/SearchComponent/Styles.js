import { StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth } from '../../Utils/Scale/Scale';

const styles = StyleSheet.create({
	container: {
		width: scaleWidth(320),
		height: scaleHeight(40),
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		top: scaleHeight(-25),
		borderRadius: 10,
		justifyContent: 'space-evenly',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
	},
	input: {
		textAlign: 'center',
		width: '60%',
		borderRightWidth: 2,
		borderColor: 'gray',
		padding: 4,
		color: 'gray',
		marginHorizontal: 8,
	},
});

export default styles;

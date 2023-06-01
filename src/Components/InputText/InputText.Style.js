import { StyleSheet } from 'react-native';
import Constants from '../../Utils/Constants/Constants';

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},
	label: {
		color: Constants.Colors.LightGreenSurplus,
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	input: {
		height: 40,
		borderWidth: 1,
		paddingHorizontal: 10,
		fontSize: 16,
	},
	errorText: {
		color: 'red',
		marginTop: 5,
	},
});

export default styles;

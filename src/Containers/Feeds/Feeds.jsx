// import React from 'react';
// import { Image, Text, View } from 'react-native';
// import { scaleFont, scaleHeight, scaleWidth } from '../../Utils/Scale/Scale';
// import Constants from '../../Utils/Constants/Constants';

// const _renderContent = (value, genap, onPress) => (
// 	<View
// 		style={{
// 			width: scaleWidth(170),
// 			height: scaleHeight(genap ? 150 : 100),
// 			backgroundColor: Constants.Colors.LightGreenSurplus,
// 			margin: 5,
// 			alignItems: 'center',
// 			justifyContent: 'center',
// 			overflow: 'hidden',
// 		}}
// 	>
// 		<Image
// 			style={{
// 				height: '100%',
// 				width: '100%',
// 				margin: 4,
// 			}}
// 			source={{ uri: value?.picture?.large }}
// 		/>

// 		<Text
// 			onPress={() => onPress(value)}
// 			style={{
// 				color: 'white',
// 				margin: 4,
// 				textTransform: 'capitalize',
// 				fontSize: scaleFont(30),
// 				alignSelf: 'flex-start',
// 				justifyContent: 'flex-start',
// 				position: 'absolute',
// 				bottom: 0,
// 			}}
// 		>
// 			{value?.name?.first}
// 		</Text>
// 	</View>
// );

// function FeedsComponent({ data, onPress }) {
// 	const isPrime = (num) => {
// 		if (num < 2) return false;
// 		for (let i = 2; i <= Math.sqrt(num); i++) {
// 			if (num % i === 0) return false;
// 		}
// 		return true;
// 	};

// 	return (
// 		<View
// 			style={{
// 				flexDirection: 'row',
// 				flexWrap: 'wrap',
// 				alignItems: 'flex-start',
// 				justifyContent: 'center',
// 			}}
// 		>
// 			{data?.map((value, i) => {
// 				let x = isPrime(i);

// 				return (
// 					<React.Fragment key={i}>
// 						{_renderContent(value, x, onPress)}
// 					</React.Fragment>
// 				);
// 			})}
// 		</View>
// 	);
// }

// export default FeedsComponent;

import React from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { scaleFont, scaleHeight, scaleWidth } from '../../Utils/Scale/Scale';
import Constants from '../../Utils/Constants/Constants';

const _renderContent = (value, genap, onPress) => (
	<View
		style={{
			width: scaleWidth(170),
			height: scaleHeight(genap ? 150 : 100),
			backgroundColor: Constants.Colors.LightGreenSurplus,
			margin: 5,
			alignItems: 'center',
			justifyContent: 'center',
			overflow: 'hidden',
		}}
	>
		<Image
			style={{
				height: '100%',
				width: '100%',
				margin: 4,
			}}
			source={{ uri: value?.picture?.large }}
		/>

		<Text
			onPress={() => onPress(value)}
			style={{
				color: 'white',
				margin: 4,
				textTransform: 'capitalize',
				fontSize: scaleFont(30),
				alignSelf: 'flex-start',
				justifyContent: 'flex-start',
				position: 'absolute',
				bottom: 0,
			}}
			testID="feed-name"
		>
			{value?.name?.first}
		</Text>
	</View>
);

function FeedsComponent({ data, onPress }) {
	const isPrime = (num) => {
		if (num < 2) return false;
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) return false;
		}
		return true;
	};

	return (
		<View
			style={{
				flexDirection: 'row',
				flexWrap: 'wrap',
				alignItems: 'flex-start',
				justifyContent: 'center',
			}}
			testID="feeds-component"
		>
			{data?.map((value, i) => {
				let x = isPrime(i);

				return (
					<React.Fragment key={i}>
						{_renderContent(value, x, onPress)}
					</React.Fragment>
				);
			})}
		</View>
	);
}

FeedsComponent.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			picture: PropTypes.shape({
				large: PropTypes.string.isRequired,
			}).isRequired,
			name: PropTypes.shape({
				first: PropTypes.string.isRequired,
			}).isRequired,
		})
	),
	onPress: PropTypes.func.isRequired,
};

export default FeedsComponent;

// import React from 'react';
// import { FlatList, Image, Text, View } from 'react-native';
// import { scaleFont, scaleHeight, scaleSize } from '../../Utils/Scale/Scale';
// import Constants from '../../Utils/Constants/Constants';

// const renderItem = ({ item }) => (
// 	<View style={{ marginHorizontal: 8 }}>
// 		<Image
// 			source={{ uri: item?.picture.medium }}
// 			style={{
// 				borderRadius: scaleHeight(50) / 2,
// 				backgroundColor: Constants.Colors.LightGreenSurplus,
// 				width: scaleHeight(50),
// 				height: scaleHeight(50),
// 			}}
// 		/>
// 		<Text style={{ fontSize: scaleFont(15), marginVertical: 4 }}>
// 			{item?.name?.first}
// 		</Text>
// 	</View>
// );

// function HighlightComponent({ data }) {
// 	return (
// 		<View
// 			style={{
// 				minHeight: scaleHeight(80),
// 				paddingVertical: scaleSize(10),
// 				backgroundColor: 'white',
// 				width: '100%',
// 				padding: scaleSize(8),
// 			}}
// 		>
// 			<Text style={{ fontSize: scaleSize(15) }}>Highlight</Text>
// 			<FlatList
// 				contentContainerStyle={{ marginTop: 10 }}
// 				horizontal={true}
// 				data={data}
// 				renderItem={renderItem}
// 				keyExtractor={(item, i) => i}
// 			/>
// 		</View>
// 	);
// }

// export default HighlightComponent;
import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { scaleFont, scaleHeight, scaleSize } from '../../Utils/Scale/Scale';
import Constants from '../../Utils/Constants/Constants';

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
	},
	itemContainer: {
		marginHorizontal: 8,
	},
	image: {
		borderRadius: scaleHeight(50) / 2,
		backgroundColor: Constants.Colors.LightGreenSurplus,
		width: scaleHeight(50),
		height: scaleHeight(50),
	},
	text: {
		fontSize: scaleFont(15),
		marginVertical: 4,
	},
});

const renderItem = ({ item, index }) => (
	<View testID={`highlight-item-${index}`} style={styles.itemContainer}>
		<Image
			source={{ uri: item?.picture.medium }}
			style={styles.image}
			testID={`highlight-image-${index}`}
		/>
		<Text style={styles.text} testID={`highlight-text-${index}`}>
			{item?.name?.first}
		</Text>
	</View>
);

function HighlightComponent({ data }) {
	return (
		<View style={styles.container} testID="highlight-component">
			<Text style={styles.title}>Highlight</Text>
			<FlatList
				contentContainerStyle={{ marginTop: 10 }}
				horizontal={true}
				data={data}
				renderItem={renderItem}
				keyExtractor={(item, index) => `highlight-item-${index}`}
			/>
		</View>
	);
}

HighlightComponent.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			picture: PropTypes.shape({
				medium: PropTypes.string.isRequired,
			}).isRequired,
			name: PropTypes.shape({
				first: PropTypes.string.isRequired,
			}).isRequired,
		})
	).isRequired,
};

export default HighlightComponent;

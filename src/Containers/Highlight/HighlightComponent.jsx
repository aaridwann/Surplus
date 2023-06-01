import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, Text, View } from 'react-native';
import styles from './HighlightComponent.Style';
import ShimmeringCustom from '../../Components/ShimmeringComponent/ShimmeringComponent';

// const Shimmer = () => (
// 	<ShimmeringCustom duration={1500} width={60} height={60} borderRadius={50} />
// );

const renderItem = ({ item, index }) => (
	<View testID={`highlight-item-${index}`} style={styles.itemContainer}>
		<Image
			source={{ uri: item?.picture.medium || '' }}
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
			<ShimmeringCustom
				duration={1500}
				width={60}
				height={60}
				borderRadius={50}
				isDone={data.length > 0}
			>
				<FlatList
					contentContainerStyle={{ marginTop: 10 }}
					horizontal={true}
					data={data}
					renderItem={renderItem}
					keyExtractor={(item, index) => `highlight-item-${index}`}
					showsHorizontalScrollIndicator={false}
				/>
			</ShimmeringCustom>
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

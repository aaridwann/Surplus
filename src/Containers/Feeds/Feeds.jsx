import React from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Feeds.Style';
import ShimmeringCustom from '../../Components/ShimmeringComponent/ShimmeringComponent';

const _renderContent = (value, genap, onPress) => (
	<View style={styles.content.wrapper(genap)}>
		<Image style={styles.content.img} source={{ uri: value?.picture?.large }} />
		<Text
			onPress={() => onPress(value)}
			style={styles.content.title}
			testID="feed-name"
		>
			{value?.name?.first}
		</Text>
	</View>
);

function FeedsComponent({ data, onPress }) {
	return (
		<View style={styles.feedsWrapper} testID="feeds-component">
			<ShimmeringCustom
				duration={2000}
				width={130}
				height={130}
				borderRadius={0}
				isDone={data.length > 0}
				count={8}
				style={{ flexWrap:'wrap'}}
			>
				{data?.map((value, i) => {
					let x = true;

					return (
						<React.Fragment key={i}>
							{_renderContent(value, x, onPress)}
						</React.Fragment>
					);
				})}
			</ShimmeringCustom>
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

import React from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { scaleSize } from '../../Utils/Scale/Scale';
import { AntDesign } from '@expo/vector-icons';
import { get } from 'lodash';
import Constants from '../../Utils/Constants/Constants';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './DetailsContainer.Style';

const _renderHead = ({ img, name }) => (
	<LinearGradient
		start={{ x: 0.2, y: 0.4 }}
		end={{ x: 1, y: 1.2 }}
		colors={[
			Constants.Colors.LightGreenSurplus,
			Constants.Colors.ExtraLightGreenSurplus,
		]}
		style={styles.headWrapper}
	>
		<Image style={styles.img} source={{ uri: img }} />
		<Text style={styles.username}>{name}</Text>
	</LinearGradient>
);

const _renderSection = ({ title, desc }) => (
	<View style={styles.sectionWrapper}>
		<View style={styles.sectionContainer}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.desc}>{desc}</Text>
		</View>
		<AntDesign name="right" size={scaleSize(20)} color="black" />
	</View>
);

const _renderContent = (props) => (
	<View style={styles.content}>
		<_renderSection title={props.email} desc={'Original Email'} />
	</View>
);

function DetailsContainer({ route }) {
	const { params } = route;
	const img = get(params, 'picture.large', '');
	const name = get(params, 'name.first', '');

	return (
		<View>
			<_renderHead img={img} name={name} />
			<_renderContent {...params} />
		</View>
	);
}

export default DetailsContainer;

DetailsContainer.propTypes = {
	route: PropTypes.object,
	navigation: PropTypes.object,
};

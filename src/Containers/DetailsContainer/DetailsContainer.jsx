import React from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import {
	scaleFont,
	scaleHeight,
	scaleSize,
	scaleWidth,
} from '../../Utils/Scale/Scale';
import { AntDesign } from '@expo/vector-icons';
import { get } from 'lodash';
import Constants from '../../Utils/Constants/Constants';
import { LinearGradient } from 'expo-linear-gradient';

const _renderHead = ({ img, name }) => (
	<LinearGradient
		start={{ x: 0.2, y: 0.4 }}
		end={{ x: 1, y: 1.2 }}
		colors={[
			Constants.Colors.LightGreenSurplus,
			Constants.Colors.ExtraLightGreenSurplus,
		]}
		style={{
			width: '100%',
			height: scaleHeight(170),
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: Constants.Colors.LightGreenSurplus,
		}}
	>
		<Image
			style={{
				borderWidth: 5,
				borderColor: 'white',
				width: 120,
				height: 120,
				backgroundColor: 'white',
				borderRadius: scaleWidth(150) / 2,
			}}
			source={{ uri: img }}
		/>
		<Text style={{ fontSize: scaleFont(30), color: 'white' }}>{name}</Text>
		{/* </View> */}
	</LinearGradient>
);

const _renderSection = ({ title, desc }) => (
	<View
		style={{
			width: '100%',
			marginVertical: 10,
			height: scaleHeight(80),
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			paddingVertical: scaleHeight(10),
			borderBottomWidth: 1.2,
			borderBottomColor: 'gray',
		}}
	>
		<View
			style={{
				height: '100%',
				justifyContent: 'space-between',
			}}
		>
			<Text style={{ fontSize: scaleFont(20) }}>{title}</Text>
			<Text style={{ fontSize: scaleFont(12) }}>{desc}</Text>
		</View>

		<AntDesign name="right" size={scaleSize(20)} color="black" />
	</View>
);

const _renderContent = (props) => (
	<View
		style={{
			width: '100%',
			height: '100%',
			padding: 8,
			backgroundColor: '#EEEDE7',
		}}
	>
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

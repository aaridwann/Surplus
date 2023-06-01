import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';

const ShimmeringCustom = ({
	count = 5,
	width,
	height,
	borderRadius,
	duration,
	children,
	isDone = false,
	direction = 'row',
	style,
}) => {
	const shimmerAnimation = useRef(new Animated.Value(-width)).current;
	const counter = new Array(count).fill('x');
	const Component = () =>
		counter.map((x, i) => (
			<View key={i} style={[styles.container, { width, height, borderRadius }]}>
				<Animated.View
					style={[
						styles.shimmer,
						{
							backgroundColor: '#f7f7f7',
							transform: [{ translateX: shimmerAnimation }],
						},
					]}
				/>
			</View>
		));

	useEffect(() => {
		const startAnimation = () => {
			shimmerAnimation.setValue(-width);
			Animated.timing(shimmerAnimation, {
				toValue: width,
				duration: duration,
				easing: Easing.linear,
				useNativeDriver: false,
			}).start(() => startAnimation());
		};

		startAnimation();

		return () => {
			shimmerAnimation.stopAnimation();
		};
	}, []);

	const styles = StyleSheet.create({
		wrapper: {
			...style,
			width: '100%',
			flexDirection: direction,
			margin: 5,
		},
		container: {
			margin: 5,
			overflow: 'hidden',
		},
		shimmer: {
			flex: 1,
		},
	});

	return isDone ? (
		children
	) : (
		<View style={styles.wrapper}>
			<Component />
		</View>
	);
};

export default ShimmeringCustom;

ShimmeringCustom.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	borderRadius: PropTypes.number,
	duration: PropTypes.number,
	children: PropTypes.node,
	isDone: PropTypes.any,
	count: PropTypes.number,
	direction: PropTypes.string,
	style: PropTypes.object,
};

import React, { useMemo, useRef, useState } from 'react';
import {
	Animated,
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import SearchComponent from '../../Components/SearchComponent/SearchComponent';
import Constants from '../../Utils/Constants/Constants';
import {
	scaleFont,
	scaleHeight,
	scaleSize,
	scaleWidth,
} from '../../Utils/Scale/Scale';
import HighlightComponent from '../Highlight/HighlightComponent';
import { get } from 'lodash';
import FeedsComponent from '../Feeds/Feeds';
import FilterComponent from '../../Components/FilterComponent/FilterComponent';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const _renderBackground = ({ username }, { Logout }) => {
	const [showOption, setShowOption] = useState(false);
	const { IMG } = Constants;

	return (
		<View
			style={{
				width: '100%',
				backgroundColor: Constants.Colors.LightGreenSurplus,
				height: scaleHeight(75),
				borderBottomEndRadius: 90,
				alignItems: 'center',
			}}
		>
			<View
				style={{
					position: 'absolute',
					left: 0,
					margin: scaleWidth(10),
					alignItems: 'center',
					color: 'white',
					flexDirection: 'row',
				}}
			>
				<SimpleLineIcons
					style={{ margin: scaleWidth(5) }}
					name="diamond"
					size={scaleSize(18)}
					color="white"
				/>
				<Text
					style={{
						textTransform: 'capitalize',
						color: 'white',
						fontWeight: '800',
						fontSize: scaleFont(20),
					}}
				>
					{username}
				</Text>
			</View>
			<Image
				style={{
					alignSelf: 'center',
					width: scaleHeight(50),
					height: scaleSize(50),
				}}
				source={IMG.SURPLUS_LOGO}
			/>
			<View
				style={{
					position: 'absolute',
					right: 0,
					width: scaleWidth(180),
					height: scaleHeight(40),
					alignItems: 'center',
					justifyContent: 'flex-end',
					flexDirection: 'row',
				}}
			>
				{showOption && (
					<TouchableOpacity onPress={Logout}>
						<Text
							style={{
								backgroundColor: 'white',
								padding: scaleSize(10),
								color: 'gray',
								paddingHorizontal: scaleSize(20),
							}}
						>
							Logout
						</Text>
					</TouchableOpacity>
				)}
				<TouchableOpacity
					// style={{backgroundColor:'red'}}
					onPress={() => setShowOption((prev) => !prev)}
				>
					<Ionicons
						style={{ marginRight: scaleWidth(15) }}
						name="ellipsis-vertical"
						size={scaleSize(24)}
						color={'white'}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};
const _renderHightLightComponent = (dataHighlight) => (
	<View style={{ width: '100%', marginTop: scaleHeight(35) }}>
		<HighlightComponent data={dataHighlight} />
	</View>
);
const _renderFeedsWrapper = (dataFeeds, go) => (
	<View style={{ marginTop: scaleHeight(10) }}>
		<FeedsComponent data={dataFeeds} onPress={go} />
	</View>
);
const _renderSearchWrapper = (animatedProps, search) => (
	<Animated.View style={animatedProps}>
		<SearchComponent onChange={(val) => search(val)} />
	</Animated.View>
);

/**
 *
 * @param {State, method} Props
 * @returns Parent Component Home
 */
const HomeComponent = (Props) => {
	const { state, method } = Props;
	const [screen, setScreen] = useState(0);
	const [show, setShow] = useState(false);
	const dataHighlight = useMemo(() => get(state, 'data', []), [state]);
	const dataFeeds = useMemo(() => get(state, 'dataFeeds', []), [
		state.dataFeeds,
	]);

	const animatedTopValue = useRef(
		new Animated.Value(show || screen === 0 ? 80 : -80)
	).current;
	const handleScroll = (event) => {
		const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
		const y = get(contentOffset, 'y', 0);

		if (y > screen) {
			setShow(false);
			setScreen(y);
		} else {
			setShow(true);
			setScreen(() => y);
		}

		const isScrolledToBottom =
			contentOffset.y + layoutMeasurement.height >= contentSize.height - 10;

		if (isScrolledToBottom) method.LoadMore();
	};
	const animatedProps = [
		styles.searchContainer,
		{ transform: [{ translateY: animatedTopValue }] },
	];
	const scrollProps = {
		onScroll: handleScroll,
		contentContainerStyle: styles.scrollViewContainer,
		showsVerticalScrollIndicator: false,
	};
	const filterComponentProps = {
		selectCountry: (e) => method.SelectFilter({ type: 'country', value: e }),
		selectGender: (e) => method.SelectFilter({ type: 'gender', value: e }),
	};

	React.useEffect(() => {
		Animated.timing(animatedTopValue, {
			toValue: show || screen === 0 ? 80 : -180,
			duration: 80,
			useNativeDriver: true,
		}).start();
	}, [show, screen, animatedTopValue]);

	return (
		<SafeAreaView style={styles.container}>
			{_renderSearchWrapper(animatedProps, method.Search)}
			<ScrollView {...scrollProps}>
				{_renderBackground(state, method)}
				{_renderHightLightComponent(dataHighlight)}
				{FilterComponent({ ...filterComponentProps })}
				{_renderFeedsWrapper(dataFeeds, method.GoToDetails)}
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
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
});

export default HomeComponent;

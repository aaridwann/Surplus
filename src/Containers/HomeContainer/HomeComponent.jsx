import React, { useMemo, useRef, useState } from 'react';
import {
	Animated,
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import SearchComponent from '../../Components/SearchComponent/SearchComponent';
import Constants from '../../Utils/Constants/Constants';
import { scaleSize } from '../../Utils/Scale/Scale';
import HighlightComponent from '../Highlight/HighlightComponent';
import { get } from 'lodash';
import FeedsComponent from '../Feeds/Feeds';
import DropDownContainer from '../../Components/FilterComponent/FilterComponent';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import Styles from './HomeComponent.Style';

const _renderBackground = ({ username }, { Logout }) => {
	const [showOption, setShowOption] = useState(false);
	const { IMG } = Constants;

	return (
		<Animatable.View
			animation={'slideInDown'}
			duration={1500}
			style={Styles.background.container}
		>
			<View style={Styles.background.leftContentWrapper}>
				<SimpleLineIcons
					style={Styles.background.icon}
					name="diamond"
					size={scaleSize(18)}
					color="white"
				/>
				<Text style={Styles.background.username}>{username}</Text>
			</View>
			<Image style={Styles.background.img} source={IMG.SURPLUS_LOGO} />
			<View style={Styles.background.optionWrapper}>
				{showOption && (
					<TouchableOpacity onPress={Logout}>
						<Text style={Styles.background.optionsText}>Logout</Text>
					</TouchableOpacity>
				)}
				<TouchableOpacity onPress={() => setShowOption((prev) => !prev)}>
					<Ionicons
						style={Styles.background.ellipsisIcon}
						name="ellipsis-vertical"
						size={scaleSize(24)}
						color={'white'}
					/>
				</TouchableOpacity>
			</View>
		</Animatable.View>
	);
};
const _renderHightLightComponent = (dataHighlight) => (
	<View style={Styles.highlightWrapper}>
		<HighlightComponent data={dataHighlight} />
	</View>
);
const _renderFeedsWrapper = (dataFeeds, go) => (
	<Animatable.View
		duration={1000}
		// easing={'ease-in'}
		// animation={'slideInUp'}
		style={Styles.feedsWrapper}
	>
		<FeedsComponent data={dataFeeds} onPress={go} />
	</Animatable.View>
);
const _renderSearchWrapper = (animatedProps, search) => (
	<Animated.View style={animatedProps}>
		<Animatable.View duration={1500} animation={'slideInRight'}>
			<SearchComponent onChange={(val) => search(val)} />
		</Animatable.View>
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
	)?.current;
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
		Styles.searchContainer,
		{ transform: [{ translateY: animatedTopValue }] },
	];
	const scrollProps = {
		onScroll: handleScroll,
		contentContainerStyle: Styles.scrollViewContainer,
		showsVerticalScrollIndicator: false,
	};
	const filterComponentProps = {
		selectCountry: (e) => method?.SelectFilter({ type: 'country', value: e }),
		selectGender: (e) => method?.SelectFilter({ type: 'gender', value: e }),
	};

	React.useEffect(() => {
		Animated.timing(animatedTopValue, {
			toValue: show || screen === 0 ? 80 : -180,
			duration: 80,
			useNativeDriver: false,
		})?.start();
	}, [show, screen, animatedTopValue]);

	return (
		<SafeAreaView style={Styles.container}>
			{_renderSearchWrapper(animatedProps, method.Search)}
			<ScrollView {...scrollProps}>
				{_renderBackground(state, method)}
				{_renderHightLightComponent(dataHighlight)}
				{DropDownContainer({ ...filterComponentProps })}
				{_renderFeedsWrapper(dataFeeds, method.GoToDetails)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeComponent;

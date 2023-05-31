import React, { useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';
import AnimatedTextInputWithLabel from '../../Components/InputText/InputText';
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import Swiper from 'react-native-swiper';
import BottomSheetComponent from '../../Components/BottomSheetComponent/BottomSheetComponent';
import { scaleFont, scaleSize, scaleWidth } from '../../Utils/Scale/Scale';
import Constants from '../../Utils/Constants/Constants';
import { AntDesign } from '@expo/vector-icons';
import { ListBackground } from './LoginConfig';

const _renderLogin = ({ ChangeInput, LoginFunction }, onPress) => (
	<View
		style={{
			padding: scaleSize(30),
			justifyContent: 'space-between',
			height: '90%',
		}}
	>
		<View>
			<AnimatedTextInputWithLabel
				onChange={(e) => ChangeInput('username', e)}
				label="Username"
			/>
			<AnimatedTextInputWithLabel
				onChange={(e) => ChangeInput('password', e)}
				label="Password"
				secureTextEntry
			/>
		</View>

		<View style={{ width: '100%' }}>
			{ButtonComponent({ title: 'Login', onPress: LoginFunction })}
			<TouchableOpacity onPress={onPress}>
				<Text
					style={{
						fontSize: scaleFont(14),
						color: 'gray',
						textAlign: 'center',
						marginTop: 10,
					}}
				>
					No have account ?
				</Text>
			</TouchableOpacity>
		</View>
	</View>
);
const _renderRegister = ({
	setRegisterChange,
	register,
	SubmitRegister,
	prev,
}) => {
	const { username, password, confirmationPassword, error } = register;
	const disableButton =
		!username || !password || !confirmationPassword || error;
	const submit = async () => {
		const submit = await SubmitRegister();
		if (!submit) return;
		prev();
	};

	return (
		<View
			style={{
				padding: scaleSize(30),
				justifyContent: 'space-between',
				height: '90%',
			}}
		>
			<TouchableOpacity
				onPress={() => prev()}
				style={{
					position: 'absolute',
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<AntDesign
					style={{ marginLeft: scaleSize(15), marginRight: scaleSize(5) }}
					name="arrowleft"
					size={20}
					color="gray"
				/>
				<Text style={{ color: 'gray', fontWeight: '600' }}>Login</Text>
			</TouchableOpacity>

			<Text
				style={{ fontSize: scaleFont(18), textAlign: 'center', color: 'gray' }}
			>
				Registration
			</Text>
			<AnimatedTextInputWithLabel
				onChange={(e) => setRegisterChange({ type: 'username', value: e })}
				label="Username"
				value={username}
			/>
			<AnimatedTextInputWithLabel
				onChange={(e) => setRegisterChange({ type: 'password', value: e })}
				label="Password"
				secureTextEntry
				password
				value={password}
			/>
			<AnimatedTextInputWithLabel
				onChange={(e) =>
					setRegisterChange({ type: 'confirmationPassword', value: e })
				}
				label="Confirmation Password"
				validation={error && 'Password not match'}
				secureTextEntry
				password
				value={confirmationPassword}
			/>
			{ButtonComponent({
				disable: disableButton,
				title: 'Register',
				onPress: submit,
			})}
		</View>
	);
};
const _renderBottomSheet = (show, method, state) => {
	const swiperRef = useRef(null);
	const next = () => {
		if (swiperRef) swiperRef.current.scrollTo(1);
	};
	const goPrev = () => {
		if (swiperRef) swiperRef.current.scrollTo(0);
	};

	return (
		<BottomSheetComponent show={show}>
			<Swiper
				ref={swiperRef}
				loop={false}
				autoplay={false}
				style={styles.wrapper}
				showsButtons={false}
			>
				{_renderLogin(method, next)}
				<_renderRegister {...method} {...state} prev={goPrev} />
			</Swiper>
		</BottomSheetComponent>
	);
};
const _renderButton = (onPress) => (
	<TouchableOpacity
		onPress={onPress}
		style={{
			opacity: 0.6,
			zIndex: 5,
			padding: 20,
			width: scaleWidth(250),
			backgroundColor: Constants.Colors.LightGreenSurplus,
		}}
	>
		<Text
			style={{
				opacity: 1,
				textAlign: 'center',
				fontSize: scaleFont(20),
				color: 'white',
			}}
		>
			LOGIN
		</Text>
	</TouchableOpacity>
);
const BackgroundSwiper = () => (
	<View
		style={{
			position: 'absolute',
			zIndex: 0,
			width: '100%',
			margin: 'auto',
		}}
	>
		<Swiper
			loop={true}
			autoplay={true}
			style={styles.wrapper}
			showsButtons={false}
		>
			{ListBackground.map(({ title, img }) => (
				<View key={title} style={styles.slide1}>
					<Text style={styles.text}>{title}</Text>
					<Image style={styles.img} source={{ uri: img }} />
				</View>
			))}
		</Swiper>
	</View>
);

/**
 *
 * @param {State Method} Props
 * @returns Parent Component Login
 */
const LoginComponent = (Props) => {
	const { state, method } = Props;
	const [show, setShow] = useState(false);
	const isShow = () => {
		setShow(() => true);
		setTimeout(() => setShow(() => false), 500);
	};

	return (
		<React.Fragment>
			<View style={styles.container}>
				{_renderButton(isShow)}
				{_renderBottomSheet(show, method, state)}
				{BackgroundSwiper()}
			</View>
		</React.Fragment>
	);
};

export default LoginComponent;

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingVertical: 20,
	},
	title: {
		fontSize: 40,
	},
	wrapper: {},
	img: {
		width: '100%',
		height: '100%',
	},
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9DD6EB',
	},
	text: {
		position: 'absolute',
		zIndex: 5,
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
});

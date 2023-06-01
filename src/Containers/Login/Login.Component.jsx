import React, { useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { AntDesign } from '@expo/vector-icons';
import { ListBackground } from './LoginConfig';
import styles from './Login.style';
import { Suspense } from 'react';

//Import Component
import AnimatedTextInputWithLabel from '../../Components/InputText/InputText';
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import BottomSheetComponent from '../../Components/BottomSheetComponent/BottomSheetComponent';

const _renderLogin = (
	{ ChangeInput, LoginFunction },
	onPress,
	{ username, password }
) => {
	const isDisable = !username || !password;

	return (
		<View testID="loginSection" style={styles.wrapperLogin}>
			<View>
				<AnimatedTextInputWithLabel
					onChange={(e) => ChangeInput('username', e)}
					label="Username"
				/>
				<AnimatedTextInputWithLabel
					onChange={(e) => ChangeInput('password', e)}
					label="Password"
					secureTextEntry
					password
				/>
			</View>
			<View style={styles.wrapperButtonLogin}>
				<ButtonComponent
					disable={isDisable}
					title={'Login'}
					onPress={LoginFunction}
				/>
				<TouchableOpacity testID="buttonSignUp" onPress={onPress}>
					<Text style={styles.titleButtonLogin}>No have account ?</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
const _renderRegister = ({
	setRegisterChange,
	register,
	SubmitRegister,
	prev,
}) => {
	const { username, password, confirmationPassword, error } = register;
	const disableButton =
		!username || !password || !confirmationPassword || error ? true : false;

	const submit = async () => {
		const submit = await SubmitRegister();
		if (!submit) return;
		prev();
	};

	return (
		<View testID="registerSection" style={styles.wrapperButtonBack}>
			<TouchableOpacity onPress={() => prev()} style={styles.buttonBack}>
				<AntDesign
					style={styles.iconBack}
					name="arrowleft"
					size={20}
					color="gray"
				/>
				<Text style={styles.titleBack}>Login</Text>
			</TouchableOpacity>
			<React.Fragment>
				<Text style={styles.titleRegister}>Registration</Text>
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
				<ButtonComponent
					disable={disableButton}
					title={'Register'}
					onPress={submit}
				/>
			</React.Fragment>
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
				testID="swiper"
				ref={swiperRef}
				loop={false}
				autoplay={false}
				style={styles.wrapper}
				showsButtons={false}
			>
				{_renderLogin(method, next, state, show)}
				<_renderRegister {...method} {...state} prev={goPrev} />
			</Swiper>
		</BottomSheetComponent>
	);
};
const _renderButton = (onPress) => (
	<TouchableOpacity
		testID="loginButton"
		onPress={onPress}
		style={styles.buttonLogin}
	>
		<Text style={styles.titleLogin}>LOGIN</Text>
	</TouchableOpacity>
);
const BackgroundSwiper = () => (
	<View style={styles.swiper.container}>
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
			<Suspense fallback={<Text>Loading</Text>}>
				<View style={styles.container}>
					{_renderButton(isShow)}
					{_renderBottomSheet(show, method, state)}
					{BackgroundSwiper()}
				</View>
			</Suspense>
		</React.Fragment>
	);
};

export default LoginComponent;

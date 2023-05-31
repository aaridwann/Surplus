import React from 'react';
import { Text, View } from 'react-native';
import { scaleSize, scaleWidth } from '../../Utils/Scale/Scale';
import { useSelector } from 'react-redux';
import { SimpleLineIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import styles from './ProfileContainer.style';

const _renderGreeting = ({ name }) => (
	<Animatable.View animation={'slideInDown'} style={styles.greeting}>
		<Text style={styles.hello}>Hello </Text>
		<Text style={styles.name}>{name}</Text>
		<SimpleLineIcons
			style={{ margin: scaleWidth(5) }}
			name="diamond"
			size={scaleSize(18)}
			color="white"
		/>
	</Animatable.View>
);

function ProfileContainer() {
	const { auth } = useSelector((state) => state);
	const { username } = auth;

	return (
		<View style={styles.container}>
			<_renderGreeting name={username} />
			<Animatable.Text
				delay={10}
				animation={'slideInRight'}
				style={styles.title}
			>
				Profile Container
			</Animatable.Text>

			<Animatable.Text
				delay={10}
				animation={'slideInLeft'}
				style={styles.maintenance}
			>
				Is Under Maintenance
			</Animatable.Text>
		</View>
	);
}

export default ProfileContainer;

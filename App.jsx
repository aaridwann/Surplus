import React from 'react';
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default function App() {
	return (
		<>
			<StatusBar />
			<Toast />
			<Navigation />
		</>
	);
}

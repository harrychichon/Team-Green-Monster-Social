import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';

export default function AddPostButton() {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => router.push('/createPost')}>
				<Text style={styles.text}>+</Text>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: theme.shadow.light.elevation,
		position: 'absolute',
		bottom: 50,
		left: 0,
		right: 0,
	},
	button: {
		backgroundColor: theme.color.primary,
		borderRadius: theme.radius.full,
		width: 75,
		height: 75,
		justifyContent: 'flex-start',
		alignItems: 'center',

		elevation: theme.shadow.light.elevation,
	},
	text: {
		fontSize: 50,
		color: theme.color.neutralLight,
		textAlign: 'center',
	},
});

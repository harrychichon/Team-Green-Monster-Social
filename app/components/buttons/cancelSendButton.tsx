import React from 'react';
import { theme } from '../../theme';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
type ButtonProps = {
	title: string;
	onPress: () => void;
};

export default function CancelSendButton({ title, onPress }: ButtonProps) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={onPress}>
				<Text style={styles.text}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: theme.space.md,
	},
	button: {
		backgroundColor: theme.color.primary,
		borderRadius: theme.radius.md,
		width: 110,
		height: theme.size.buttonHeight,
		elevation: theme.shadow.medium.elevation,
		justifyContent: 'center',
	},
	text: {
		fontSize: theme.font.md,
		fontWeight: 600,
		textAlign: 'center',
	},
});

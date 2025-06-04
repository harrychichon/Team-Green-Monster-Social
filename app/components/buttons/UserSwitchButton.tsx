import useSocialContext from '@/app/hooks/useSocialContext';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';

export default function UserSwitchButton() {
	const router = useRouter();
	const { currentUser } = useSocialContext();

	return (
		<View style={styles.container}>
			<Text style={styles.name}>GOA DJUR</Text>
			<TouchableOpacity onPress={() => router.push('/')}>
				<Image
					source={{ uri: currentUser?.picSource }}
					style={[styles.profileImage]}
				/>
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
		padding: theme.space.sm,
		backgroundColor: theme.color.primary,
	},
	name: {
		fontSize: theme.font.xxl,
		color: theme.color.neutralDark,
		fontWeight: 900,
	},
	profileImage: {
		width: 80,
		height: 80,
		borderRadius: theme.radius.full,
		borderWidth: 3,
		marginBottom: theme.space.md,
	},
});

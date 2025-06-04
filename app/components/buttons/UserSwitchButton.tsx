import useSocialContext from '@/app/hooks/useSocialContext';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';

export default function UserSwitchButton() {
	const router = useRouter();
	const { currentUser } = useSocialContext();

	return (
		<View style={styles.container}>
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
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginTop: theme.space.md,
	},
	profileImage: {
		width: 80,
		height: 80,
		borderRadius: theme.radius.full,
		borderWidth: 3,
		marginBottom: theme.space.sm,
	},
});

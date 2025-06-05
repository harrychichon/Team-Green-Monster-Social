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
			<TouchableOpacity onPress={() => router.push('/')}>
				<Image
					source={{ uri: currentUser?.picSource }}
					style={[styles.profileImage]}
				/>
			</TouchableOpacity>
			<Text style={styles.name}>{currentUser?.userName}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		width: '100%',
		marginTop: theme.space.md,
		padding: theme.space.sm,
		backgroundColor: theme.color.primary,
		borderBottomLeftRadius: theme.radius.xl,
		borderBottomRightRadius: theme.radius.xl,
		borderTopLeftRadius: theme.radius.sm,
		zIndex: 10,
		overflow: 'hidden',
		borderColor: theme.color.neutralLight,
		borderBottomWidth: 3,
		borderLeftWidth: 2,
		borderRightWidth: 2,
	},
	name: {
		fontSize: theme.font.xl,
		color: theme.color.neutralDark,
		fontWeight: 400,
		marginRight: 200,
		alignSelf: 'center',
	},
	profileImage: {
		width: 85,
		height: 85,
		borderWidth: 3,
		marginTop: theme.space.sm,
		borderRadius: theme.radius.full,
		marginBottom: theme.space.md,
		borderColor: theme.color.neutralLight,
	},
});

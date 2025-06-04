import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useSocialContext from '../hooks/useSocialContext';

import { theme } from '../theme';
import { MonsterType } from '../types';
export default function Index() {
	const { monsters } = useSocialContext();
	const { setCurrentUser } = useSocialContext();
	const router = useRouter();
	const borderColors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

	const submitHandle = (id: string) => {
		const selectedUser = monsters.find((user: MonsterType) => user.id === id);
		if (selectedUser) {
			setCurrentUser(selectedUser);
			console.log('Selected User:', selectedUser);
			router.push('/posts');
		}
	};

	return (
		<SafeAreaProvider style={styles.container}>
			<Text style={styles.header}>Choose user</Text>
			<View style={styles.profileRow}>
				{monsters.map((user, index) => {
					const borderColor = borderColors[index % borderColors.length];
					return (
						<TouchableOpacity
							key={user.id}
							style={styles.profileContainer}
							onPress={() => {
								submitHandle(user.id);
							}}>
							<Image
								source={{ uri: user.picSource }}
								style={[styles.profileImage, { borderColor }]}
							/>
							<Text style={styles.profileName}>{user.userName}</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: theme.color.background,
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		color: theme.color.text,
		fontSize: theme.font.lg,
		marginBottom: 40,
	},
	profileRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap',
		gap: 23,
	},
	profileContainer: {
		alignItems: 'center',
		marginHorizontal: theme.space.sm,
	},
	profileImage: {
		width: 80,
		height: 80,
		borderRadius: theme.radius.full,
		borderWidth: 3,
		marginBottom: theme.space.sm,
	},
	profileName: {
		fontSize: theme.font.sm,
		letterSpacing: 1,
		color: theme.color.textSecondary,
	},
});

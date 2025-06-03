import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import useSocialContext from "../hooks/useSocialContext";
import { theme } from "../theme";
export default function Index() {
	const { monsters } = useSocialContext();
	const router = useRouter();
	const borderColors = ["red", "green", "blue"];

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
							onPress={() =>
								router.push({
									pathname: "/(tabs)/posts",
									params: { user: JSON.stringify(user) },
								})
							}
						>
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
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		color: theme.color.text,
		fontSize: theme.font.lg,
		marginBottom: 40,
	},
	profileRow: {
		flexDirection: "row",
		justifyContent: "center",
	},
	profileContainer: {
		alignItems: "center",
		marginHorizontal: 10,
	},
	profileImage: {
		width: 80,
		height: 80,
		borderRadius: theme.radius.full,
		borderWidth: 3,
		marginBottom: 10,
	},
	profileName: {
		fontSize: theme.font.sm,
		letterSpacing: 1,
		color: theme.color.textSecondary,
	},
});

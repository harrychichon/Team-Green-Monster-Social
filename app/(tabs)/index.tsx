import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MonsterType } from "../types";

import { useRouter } from "expo-router";
import useSocialContext from "../hooks/useSocialContext";

export default function Index() {
	const { monsters } = useSocialContext();
	const { setCurrentUser } = useSocialContext();
	const router = useRouter();
	const borderColors = ["red", "green", "blue", "yellow", "purple", "orange"];

	const submitHandle = (id: string) => {
		const selectedUser = monsters.find((user: MonsterType) => user.id === id);
		if (selectedUser) {
			setCurrentUser(selectedUser);
			console.log("Selected User:", selectedUser);
			router.push("/posts");
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
							}}
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

		backgroundColor: "#000",
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		color: "#fff",
		fontSize: 24,
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
		borderRadius: 40,
		borderWidth: 3,
		marginBottom: 10,
	},
	profileName: {
		fontSize: 12,
		letterSpacing: 1,
		color: "white",
	},
});

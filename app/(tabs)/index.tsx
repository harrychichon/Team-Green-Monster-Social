import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MonsterType } from "../types";

const mockMonster: MonsterType[] = [
	{
		id: "00",
		userName: "Tiger",
		picSource: "https://davidshepherd.org/wp-content/uploads/2024/07/Craig-Jones-Tigers-18-cropped.jpg",
	},
	{
		id: "01",
		userName: "Turtle",
		picSource: "https://cloudfront-us-east-1.images.arcpublishing.com/opb/QITEYZ22ABMF3CEKJLKRAGUJEM.jpg",
	},
	{
		id: "02",
		userName: "Janne",
		picSource: "https://idrottensaffarer.se/files/imagecache/100_proc/story_image/sdltc490d12-nh.jpg",
	},
];

import { useRouter } from "expo-router";

export default function Index() {
	const router = useRouter();
	const borderColors = ["red", "green", "blue"];

	return (
		<SafeAreaProvider style={styles.container}>
			<Text style={styles.header}>Choose user</Text>
			<View style={styles.profileRow}>
				{mockMonster.map((user, index) => {
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

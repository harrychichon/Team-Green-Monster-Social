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
export default function Index() {
	return (
		<SafeAreaProvider style={styles.container}>
			<Text style={styles.header}>Choose user</Text>
			<View style={styles.profileRow}>
				{mockMonster.map((user, index) => {
					const borderColors = ["red", "green", "blue"];
					const borderColor = borderColors[index % borderColors.length];

					return (
						<View key={user.id} style={styles.profileContainer}>
							<Image
								source={{ uri: user.picSource }}
								style={[styles.profileImage, { borderColor }]}
							/>
							<Text style={styles.profileName}>{user.userName}</Text>
						</View>
					);
				})}
			</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000", // black background
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
		marginHorizontal: 10, // Add horizontal margin for spacing
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
	},
});

import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function SwitchUserButton() {
	const router = useRouter();

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
				<Text style={styles.text}>Switch User</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		marginTop: 15,
	},
	button: {
		backgroundColor: "gray",
		borderRadius: 20,
		width: 125,
		height: 45,
		borderColor: "#424242",
		borderWidth: 4,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
		color: "white",
		textAlign: "center",
	},
});

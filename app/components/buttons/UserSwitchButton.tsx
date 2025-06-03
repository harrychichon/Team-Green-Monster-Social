import useSocialContext from "@/app/hooks/useSocialContext";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";

export default function UserSwitchButton() {
	const router = useRouter();
	const { currentUser } = useSocialContext();

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => router.push("/")}>
				<Image source={{ uri: currentUser?.picSource }} style={[styles.profileImage]} />
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
	profileImage: {
		width: 80,
		height: 80,
		borderRadius: 40,
		borderWidth: 3,
		marginBottom: 10,
	},
});

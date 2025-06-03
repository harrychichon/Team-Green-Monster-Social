import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CancelSendButton from "../components/buttons/cancelSendButton";
import InputField from "../components/inputfield/Inputfield";
import { PostProps } from "../types";
import { router } from "expo-router";
import useSocialContext from "../hooks/useSocialContext";

export default function CreatePost() {
	const { posts, setPosts } = useSocialContext();
	const [newText, setNewText] = useState<string>("");

	const handlePostSubmit = () => {
		if (newText.trim().length === 0) return;

		const newPost: PostProps = {
			profileImage: "",
			name: "Current User",
			postedAt: new Date().toLocaleString(),
			text: newText.trim(),
		};

		setPosts([newPost, ...posts]);
		setNewText("");
		router.push("/posts");
	};

	return (
		<SafeAreaProvider style={style.container}>
			<KeyboardAvoidingView style={{ flex: 1, width: "100%" }}>
				<View style={style.inner}>
					<Text style={style.label}>Write something…</Text>
					<InputField
						value={newText}
						onChangeText={setNewText}
						placeholder="Type your post here"
						multiline
					/>

					<View style={style.buttonRow}>
						<CancelSendButton title="Cancel" onPress={() => router.push("/posts")} />
						<CancelSendButton title="Send" onPress={handlePostSubmit} />
					</View>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaProvider>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#1e1e1e",
	},
	inner: {
		flex: 1,
		padding: 20,
		justifyContent: "flex-start",
		width: "100%",
	},
	label: {
		color: "#89CFF0",
		fontSize: 18,
		marginBottom: 8,
	},
	buttonRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 16,
	},
	errorText: {
		color: "red",
		fontSize: 16,
	},
});

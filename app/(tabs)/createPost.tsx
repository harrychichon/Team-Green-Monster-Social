import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CancelSendButton from "../components/buttons/cancelSendButton";
import InputField from "../components/inputfield/Inputfield";
import { router } from "expo-router";
import useSocialContext from "../hooks/useSocialContext";
import { PostType } from "../types";
import { theme } from "../theme";

export default function CreatePost() {
	const { posts, setPosts } = useSocialContext();
	const { currentUser } = useSocialContext();
	const [newText, setNewText] = useState<string>("");

	const handlePostSubmit = () => {
		if (newText.trim().length === 0) return;
		if (!currentUser) {
			console.error("No current user set");
			return;
		}
		const newPost: PostType = {
			monsterUser: currentUser,
			postedAt: new Date().toLocaleString(),
			text: newText.trim(),
		};

		setPosts([newPost, ...posts]);
		setNewText("");
		router.push("/posts");
	};

	return (
		<SafeAreaProvider style={styles.safeArea}>
			<View style={styles.inner}>
				<KeyboardAvoidingView
					style={styles.keyboard}
					behavior={Platform.OS === "ios" ? "padding" : "height"}
				>
					<Text style={styles.label}>Write something…</Text>
					<InputField
						value={newText}
						onChangeText={setNewText}
						placeholder="Type your post here"
						multiline
					/>

					<View style={styles.buttonRow}>
						<CancelSendButton title="Cancel" onPress={() => router.push("/posts")} />
						<CancelSendButton title="Send" onPress={handlePostSubmit} />
					</View>
				</KeyboardAvoidingView>
			</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: theme.color.background,
	},
	keyboard: {
		flex: 1,
		width: "100%",
	},
	inner: {
		flex: 1,
		padding: theme.space.md,
		justifyContent: "flex-start",
		width: "100%",
	},
	label: {
		color: theme.color.text,
		fontSize: theme.font.md,
		marginBottom: theme.space.sm,
	},
	buttonRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: theme.space.md,
	},
	errorText: {
		color: theme.color.danger,
		fontSize: theme.font.md,
	},
});

import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CancelSendButton from "../components/buttons/cancelSendButton";
import InputField from "../components/inputfield/Inputfield";
import useSocialContext from "../hooks/useSocialContext";
import { theme } from "../theme";
import { PostType } from "../types";

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
			id: Date.now().toString(),
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
		backgroundColor: theme.color.neutralDark,
	},
	inner: {
		flex: 1,
		padding: theme.space.md,
		width: "100%",
	},
	keyboard: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-end",
		width: "100%",
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

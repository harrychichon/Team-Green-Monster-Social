import React, { useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, TextInput, View } from "react-native";

type CommentButtonProps = {
	postId: number;
	onAddComment: (postId: number, comment: string) => void;
  };

export default function CommentButton({ postId, onAddComment }: CommentButtonProps) {
	const [showInput, setShowInput] = useState(false);
	const [comment, setComment] = useState("");

	const handleSubmit = () => {
	const trimmed = comment.trim();
	if (!trimmed) return;
	if (trimmed.length > 140) return alert("Max 140 characters");

	onAddComment(postId, trimmed);
	setComment("");
	setShowInput(false);
	};

	return (
		<View>
			<TouchableOpacity style={styles.button} onPress={() => setShowInput(prev => !prev)}>
				<Text style={styles.text}>{showInput ? "Cancel" : "Comment"}</Text>
			</TouchableOpacity>

			{showInput && (
				<View style={{ marginTop: 8 }}>
					<TextInput value={comment} onChangeText={setComment} placeholder="Write a comment..." maxLength={140} />
					<TouchableOpacity style={{ backgroundColor: "#424242", padding: 10, borderRadius: 6, alignItems: "center" }} onPress={handleSubmit}>
						<Text style={{ color: "white" }}>Send</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 120,
		height: 35,
		backgroundColor: "#757575",
		borderRadius: 8,
		borderWidth: 4,
		borderColor: "#424242",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
	},
	text: {
		fontSize: 16,
		color: "white",
	},
});

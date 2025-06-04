import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { theme } from '../../theme';

type CommentButtonProps = {
	postId: number;
	onAddComment: (postId: number, comment: string) => void;
};

export default function CommentButton({
	postId,
	onAddComment,
}: CommentButtonProps) {
	const [showInput, setShowInput] = useState(false);
	const [comment, setComment] = useState('');

	const handleSubmit = () => {
		const trimmed = comment.trim();
		if (!trimmed) return;
		if (trimmed.length > 140) return alert('Max 140 characters');

		onAddComment(postId, trimmed);
		setComment('');
		setShowInput(false);
	};

	return (
		<View>
			<TouchableOpacity
				style={styles.button}
				onPress={() => setShowInput((prev) => !prev)}>
				<Text style={styles.text}>{showInput ? 'Cancel' : 'Comment'}</Text>
			</TouchableOpacity>

			{showInput && (
				<View style={{ marginTop: 8 }}>
					<TextInput
						value={comment}
						onChangeText={setComment}
						placeholder='Write a comment...'
						maxLength={140}
					/>
					<TouchableOpacity
						style={{
							backgroundColor: theme.color.secondary,
							padding: theme.space.sm,
							borderRadius: theme.radius.sm,
							alignItems: 'center',
							justifyContent: 'center',

							height: theme.size.buttonHeight,
							elevation: theme.shadow.medium.elevation,
						}}
						onPress={handleSubmit}>
						<Text
							style={{
								color: theme.color.textSecondary,
								fontWeight: 600,
								fontSize: theme.font.md,
							}}>
							Send
						</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 110,
		height: theme.size.buttonHeight,
		backgroundColor: theme.color.secondary,
		borderRadius: theme.radius.md,
		elevation: theme.shadow.medium.elevation,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: theme.space.sm,
	},
	text: {
		fontSize: theme.font.md,
		fontWeight: 600,
		color: theme.color.textSecondary,
	},
});

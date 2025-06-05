import React, { useState } from 'react';
import {
	KeyboardAvoidingView,
	Modal,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { theme } from '../../theme';

type CommentButtonProps = {
	postId: string;
	onAddComment: (postId: string, comment: string) => void;
  };

export default function CommentButton({
	postId,
	onAddComment,
}: CommentButtonProps) {

	// const [showInput, setShowInput] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const [comment, setComment] = useState('');

	const handleSubmit = () => {
		const trimmed = comment.trim();
		if (!trimmed) return;
		if (trimmed.length > 140) return alert('Max 140 characters');

		onAddComment(postId, trimmed);
		setComment('');
		// setShowInput(false);
		setShowModal(false);
	};

	return (
		<View>
			<TouchableOpacity style={styles.button} onPress={() => setShowModal(true)}>
				<Text style={styles.text}>Comment</Text>
			</TouchableOpacity>

			<Modal
				visible={showModal}
				transparent
				onRequestClose={() => setShowModal(false)}>
				<View style={styles.modalBackdrop}>
					<KeyboardAvoidingView
						behavior={Platform.OS === 'ios' ? 'padding' : undefined}
						style={styles.modalContent}>
						<TextInput
							value={comment}
							onChangeText={setComment}
							placeholder="Write a comment..."
							maxLength={140}
							style={styles.input}
							placeholderTextColor="#aaa"
						/>
						<View style={styles.buttonRow}>
							<TouchableOpacity
								style={[styles.button, styles.cancelButton]}
								onPress={() => setShowModal(false)}>
								<Text style={styles.buttonText}>Cancel</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button} onPress={handleSubmit}>
								<Text style={styles.buttonText}>Send</Text>
							</TouchableOpacity>
						</View>
					</KeyboardAvoidingView>
				</View>
			</Modal>

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
		alignSelf: 'flex-end', // ✅ this aligns it to the right
	},
	text: {
		fontSize: theme.font.md,
		fontWeight: 600,
		color: theme.color.textSecondary,
	},
	input: {
		backgroundColor: '#fff',
		color: theme.color.textSecondary,
		fontSize: theme.font.md,
		padding: theme.space.md,
		borderRadius: theme.radius.md,
		borderWidth: theme.size.borderWidth,
		borderColor: theme.color.neutralLight,
		marginBottom: theme.space.sm,
	},
	modalBackdrop: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContent: {
		backgroundColor: theme.color.neutralLight,
		padding: theme.space.lg,
		borderRadius: theme.radius.lg,
		width: '85%',
		maxWidth: 400,
		paddingBottom: 24,
	},
	buttonRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: theme.space.lg,
	},
	cancelButton: {
		backgroundColor: 'none',
	},
	buttonText: {
		color: theme.color.textSecondary,
		fontWeight: '600',
		fontSize: theme.font.md,
	},
});

import { useRef } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { theme } from '../../theme';

export default function CommentButton() {
	const inputRef = useRef<TextInput>(null);

	const showKeyboard = () => {
		inputRef.current?.focus();
	};

	return (
		<View>
			<TouchableOpacity
				style={styles.button}
				onPress={showKeyboard}>
				<Text style={styles.text}>Comment</Text>
			</TouchableOpacity>

			<TextInput
				ref={inputRef}
				style={styles.hiddenInput}
				caretHidden
				autoCorrect={false}
				autoCapitalize='none'
				underlineColorAndroid='transparent'
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 120,
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
		color: theme.color.text,
	},
	hiddenInput: {
		height: 0,
		width: 0,
		opacity: 0,
		position: 'absolute',
	},
});

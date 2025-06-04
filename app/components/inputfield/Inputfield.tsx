import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { theme } from '../../theme';

type InputFieldProps = {
	value: string;
	onChangeText: (text: string) => void;
	placeholder?: string;
	multiline?: boolean;
};

export default function InputField({
	value,
	onChangeText,
	placeholder = '',
	multiline = false,
}: InputFieldProps) {
	return (
		<View style={styles.wrapper}>
			<TextInput
				style={[styles.input, multiline && styles.multiline]}
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
				placeholderTextColor='#aaa'
				multiline={multiline}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
		marginVertical: theme.space.sm,
	},
	input: {
		backgroundColor: theme.color.neutralLight,
		color: theme.color.textSecondary,
		fontSize: theme.font.md,
		padding: theme.space.md,
		borderRadius: theme.radius.md,
		borderWidth: theme.size.borderWidth,
		borderColor: theme.color.neutralLight,
	},
	multiline: {
		height: 120,
		textAlignVertical: 'top', // so text starts at top on Android
	},
});

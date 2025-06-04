import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

type InputFieldProps = {
	value: string;
	onChangeText: (text: string) => void;
	placeholder?: string;
	multiline?: boolean;
};

export default function InputField({
	value,
	onChangeText,
	placeholder = "",
	multiline = false,
}: InputFieldProps) {
	return (
		<View style={styles.wrapper}>
			<TextInput
				style={[styles.input, multiline && styles.multiline]}
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
				placeholderTextColor="#aaa"
				multiline={multiline}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		width: "100%",
		marginVertical: 8,
	},
	input: {
		backgroundColor: "#2a2a2a",
		color: "#fff",
		fontSize: 16,
		padding: 12,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#444",
	},
	multiline: {
		height: 120,
		textAlignVertical: "top", // so text starts at top on Android
	},
});

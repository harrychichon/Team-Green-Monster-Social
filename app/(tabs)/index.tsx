import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
	return (
		<SafeAreaProvider style={styles.container}>
			<Text style={styles.text}>Login? Show users here</Text>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#1e1e1e",
	},
	text: {
		color: "#89CFF0",
		fontSize: 24,
	},
});

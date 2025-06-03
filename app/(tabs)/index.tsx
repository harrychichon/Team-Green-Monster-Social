import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
	return (
		<SafeAreaProvider style={style.container}>
			<Text style={style.text}>Login? Show users here</Text>
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
	text: {
		color: "#89CFF0",
		fontSize: 24,
	},
});

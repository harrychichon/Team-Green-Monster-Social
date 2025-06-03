import { StyleSheet, ScrollView, View } from "react-native";
import PostComponent from "./../components/posts/PostComponent";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AddPostButton from "../components/buttons/addPostButton";
import SwitchUserButton from "../components/buttons/SwitchUserButton";

export default function Posts() {
	return (
		<SafeAreaProvider style={style.safeArea}>
			<View style={style.topButtonContainer}>
				<SwitchUserButton />
			</View>

			<ScrollView style={style.scrollView}>
				<PostComponent />
			</ScrollView>
			<View style={style.addButtonContainer}>
				<AddPostButton />
			</View>
		</SafeAreaProvider>
	);
}

const style = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#1e1e1e",
		paddingVertical: 25,
	},
	container: {
		display: "flex",
		width: "100%",
		paddingHorizontal: 20,
		flex: 0,
		backgroundColor: "#1e1e1e",
	},
	topButtonContainer: {
		alignItems: "flex-end",
		paddingHorizontal: 20,
		marginBottom: 10,
	},
	scrollView: {
		paddingHorizontal: 20,
		backgroundColor: "#1e1e1e",
	},
	addButtonContainer: {
		alignItems: "center",
		marginVertical: 20,
	},
});

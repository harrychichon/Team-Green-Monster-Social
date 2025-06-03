import { StyleSheet, ScrollView, View, Text } from "react-native";
import PostComponent from "./../components/posts/PostComponent";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useSocialContext from "../hooks/useSocialContext";

export default function Posts() {
	const { posts } = useSocialContext();

	return (
		<SafeAreaProvider style={{ flex: 1, backgroundColor: "#1e1e1e", paddingVertical: 25 }}>
			<ScrollView style={style.container}>
				{posts.length === 0 ? (
					<View style={style.emptyWrapper}>
						<Text style={style.emptyText}>No posts yet.</Text>
					</View>
				) : (
					posts.map((post, idx) => (
						<PostComponent
							key={idx}
							profileImage={post.profileImage}
							name={post.name}
							postedAt={post.postedAt}
							text={post.text}
						/>
					))
				)}
				<PostComponent
					profileImage=""
					name="Tiger Doe"
					postedAt="Just Now"
					postImageUrl="https://example.com/post-image.jpg"
					text="This is a sample post text."
				/>
				<PostComponent
					profileImage=""
					name="Tiger Doe"
					postedAt="Just Now"
					postImageUrl="https://example.com/post-image.jpg"
					text="This is a sample post text."
				/>
				<PostComponent
					profileImage=""
					name="Tiger Doe"
					postedAt="Just Now"
					postImageUrl="https://example.com/post-image.jpg"
					text="This is a sample post text."
				/>
				<PostComponent
					profileImage=""
					name="Tiger Doe"
					postedAt="Just Now"
					postImageUrl="https://example.com/post-image.jpg"
					text="This is a sample post text."
				/>
				<PostComponent
					profileImage=""
					name="Tiger Doe"
					postedAt="Just Now"
					postImageUrl="https://example.com/post-image.jpg"
					text="This is a sample post text."
				/>
			</ScrollView>
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
	text: {
		color: "#89CFF0",
		fontSize: 24,
	},
	emptyWrapper: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 50,
	},
	emptyText: {
		color: "#aaa",
		fontSize: 18,
	},
	errorText: {
		color: "red",
		fontSize: 16,
		textAlign: "center",
		marginTop: 20,
	},
});

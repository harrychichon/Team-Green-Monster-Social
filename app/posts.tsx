import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddPostButton from './components/buttons/addPostButton';
import UserSwitchButton from './components/buttons/UserSwitchButton';
import PostComponent from './components/posts/PostComponent';
import { theme } from './theme';

export default function Posts() {
	return (
		<SafeAreaProvider style={styles.safeArea}>
			{/* <View style={styles.topButtonContainer}>
			</View> */}
			<UserSwitchButton />

			<ScrollView style={styles.scrollView}>
				<PostComponent />
			</ScrollView>
			<AddPostButton />
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: theme.color.neutralLight,
		paddingTop: theme.space.lg,
	},
	container: {
		display: 'flex',
		width: '100%',
		paddingHorizontal: theme.space.lg,
		flex: 0,
		backgroundColor: theme.color.primary,
	},
	topButtonContainer: {
		alignItems: 'flex-end',
		paddingHorizontal: theme.space.md,
		marginBottom: theme.space.sm,
		backgroundColor: 'transparent',
	},
	scrollView: {
		paddingHorizontal: theme.space.md,
		backgroundColor: theme.color.background,
	},
});

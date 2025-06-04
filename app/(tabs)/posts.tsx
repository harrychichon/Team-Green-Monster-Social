import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddPostButton from '../components/buttons/addPostButton';
import UserSwitchButton from '../components/buttons/UserSwitchButton';
import { theme } from '../theme';
import PostComponent from './../components/posts/PostComponent';

export default function Posts() {
	return (
		<SafeAreaProvider style={styles.safeArea}>
			<View style={styles.topButtonContainer}>
				<UserSwitchButton />
			</View>

			<ScrollView style={styles.scrollView}>
				<PostComponent />
			</ScrollView>
			<View style={styles.addButtonContainer}>
				<AddPostButton />
			</View>
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
	},
	scrollView: {
		paddingHorizontal: theme.space.md,
		backgroundColor: theme.color.background,
	},
	addButtonContainer: {
		alignItems: 'center',
		marginTop: theme.space.md,
	},
});

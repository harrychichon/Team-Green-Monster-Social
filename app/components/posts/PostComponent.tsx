import useSocialContext from '@/app/hooks/useSocialContext';
import { useState } from 'react';
import {
	Image,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { theme } from '../../theme';
import CommentButton from '../buttons/CommentsButton';

function PostComponent() {
  const { posts, comments, setComments } = useSocialContext();
  //const [comments, setComments] = useState<{ [key: string]: string[] }>({});
  const [visiblePostId, setVisiblePostId] = useState<string | null>(null);

  const handleAddComment = (postId: string, comment: string) => {
  setComments(prev => ({
	  ...prev,
	  [postId]: [...(prev[postId] || []), comment],
  }));
  };

  return (
	<View>
	{posts.map((post) => {
	const postId = post.id;

	return (
	<View key={postId} style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: post.monsterUser.picSource }}
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.name}>{post.monsterUser.userName}</Text>
          <Text style={styles.postedAt}>{post.postedAt}</Text>
        </View>
      </View>

			{post.postImageUrl ? (
				<Image
					source={{ uri: post.postImageUrl }}
					style={styles.postImage}
				/>
			) : null}

			<Text style={styles.text}>{post.text}</Text>

			<View style={styles.buttonRow}>
				<View style={{ flex: 1 }} />
				{comments[postId]?.length > 0 && (
					<TouchableOpacity onPress={() => setVisiblePostId(postId)}>
						<Text>
						{comments[postId].length} comment{comments[postId].length > 1 ? "s" : ""}
						</Text>
					</TouchableOpacity>
				)}
				<CommentButton postId={postId} onAddComment={handleAddComment} />

				<Modal visible={visiblePostId === postId} onRequestClose={() => setVisiblePostId(null)}>
					<View style={{ margin: 20 }}>
						<Text>Comments</Text>

						{(comments[postId] || []).map((comment, index) => (
						<Text key={index}>{comment}</Text>
						))}

						<TouchableOpacity onPress={() => setVisiblePostId(null)}>
							<Text>Close</Text>
						</TouchableOpacity>
					</View>
				</Modal>
			</View>
		</View>
	  );
    })}
  </View>
);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.color.neutralLight,
		padding: theme.space.md,
		marginVertical: theme.space.sm,
		borderRadius: theme.space.sm,
		shadowColor: theme.shadow.medium.shadowColor,
		shadowOpacity: theme.shadow.medium.shadowOpacity,
		shadowRadius: theme.shadow.medium.shadowRadius,
		elevation: theme.shadow.medium.elevation,
	},
	text: {
		color: theme.color.textSecondary,
		fontSize: theme.font.sm,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: theme.space.sm,
		backgroundColor: '#f8f8f8',
		borderRadius: theme.radius.md,
		marginBottom: theme.space.sm,
	},
	profileImage: {
		width: 60,
		height: 60,
		borderRadius: theme.radius.full,
		marginRight: theme.space.sm,
	},
	headerText: {},
	name: {
		fontWeight: '600',
		fontSize: theme.font.md,
	},
	postedAt: {
		fontSize: theme.font.sm,
		color: '#666',
	},
	postImage: {
		width: '100%',
		height: 200,
		borderRadius: theme.radius.md,
		marginBottom: theme.space.sm,
		resizeMode: 'cover',
	},
	buttonRow: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginTop: theme.space.sm,
	},
});

export default PostComponent;

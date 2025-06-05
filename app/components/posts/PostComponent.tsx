import useSocialContext from '@/app/hooks/useSocialContext';
import { useState } from 'react';
import {
	Image,
	Modal,
	ScrollView,
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
				{comments[postId]?.length > 0 && (
					<TouchableOpacity onPress={() => setVisiblePostId(postId)} style={{ justifyContent: 'center'}}>
						<Text style={styles.commentsCount}>
						{comments[postId].length} comment{comments[postId].length > 1 ? "s" : ""}
						</Text>
					</TouchableOpacity>
				)}
				<View style={{ flex: 1, alignItems: 'flex-end' }}>
				<CommentButton postId={postId} onAddComment={handleAddComment} />
				</View>

				<Modal   transparent={true} visible={visiblePostId === postId} onRequestClose={() => setVisiblePostId(null)}>
					<View style={styles.modalBackdrop}>
						<View style={styles.modalContainer}>
							<Text style={styles.modalTitle}>Comments</Text>

							<ScrollView style={styles.commentsList}>
								{(comments[postId] || []).map((comment, index) => (
								<Text key={index} style={styles.commentText}>{comment}</Text>
								))}
							</ScrollView>

							<TouchableOpacity style={styles.closeButton} onPress={() => setVisiblePostId(null)}>
								<Text style={styles.buttonText}>Close</Text>
							</TouchableOpacity>
						</View>
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
		marginTop: theme.space.sm,
	},
	commentsCount: {
		marginTop: theme.space.sm,
		textAlignVertical: 'center',
	},
	modalContainer: {
		width: '85%',
		height: '30%',
		backgroundColor: theme.color.neutralLight,
		borderRadius: theme.radius.lg,
		padding: theme.space.md,
	},
	modalTitle: {
		fontSize: theme.font.lg,
		fontWeight: '700',
		marginBottom: theme.space.sm,
		color: theme.color.textSecondary,
	  },
	commentsList: {
		flex: 1,
	},
	modalBackdrop: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	  },
	commentText: {
		fontSize: theme.font.sm,
		color: theme.color.textSecondary,
		marginBottom: theme.space.xs,
	},
	closeButton: {
		width: 110,
		height: theme.size.buttonHeight,
		backgroundColor: theme.color.secondary,
		borderRadius: theme.radius.md,
		elevation: theme.shadow.medium.elevation,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: theme.space.sm,
		alignSelf: 'flex-end',
	},
	buttonText: {
		color: theme.color.textSecondary,
		fontWeight: '600',
		fontSize: theme.font.md,
	},
	commentButton: {
		alignSelf: 'flex-end',
	}
});

export default PostComponent;

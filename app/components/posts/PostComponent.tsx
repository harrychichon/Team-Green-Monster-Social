import { View, Text, StyleSheet, Image } from 'react-native';
import useSocialContext from '@/app/hooks/useSocialContext';
import CommentButton from '../buttons/commentButton';

function PostComponent() {
  const { posts } = useSocialContext();

  return posts.map(post => (
    <View key={post.text} style={styles.container}>
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
        <Image source={{ uri: post.postImageUrl }} style={styles.postImage} />
      ) : null}

      <Text style={styles.text}>{post.text}</Text>

      <View style={styles.buttonRow}>
        <View style={{ flex: 1 }} />
        <CommentButton />
      </View>
    </View>
  ));
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  text: {
    color: '#000',
    fontSize: 14,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  headerText: {},
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
  postedAt: {
    fontSize: 12,
    color: '#666',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
});

export default PostComponent;

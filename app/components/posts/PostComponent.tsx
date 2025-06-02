import { View, Text, StyleSheet, Image } from "react-native";
import { PostProps } from "@/app/types";


    
function PostComponent(props: PostProps) {

  // Hardcoded stuff change later
  const name = props.name || "Anonymous";
  const postedAt = props.postedAt || "Just now";
  const profileImage = props.profileImage || "https://media.istockphoto.com/id/1445781372/sv/foto/tiger-looking-at-the-camera-on-a-black-background.jpg?s=2048x2048&w=is&k=20&c=GmfhJXx7HYuxo1vPk8dS0vntF42J_sQ14deAKn7Gc_E=";
  const postImageUrl = "https://focus.independent.ie/thumbor/hw8MRpqWDc-IKK3L7nvbTf3egzY=/0x0:2500x1665/960x640/prod-mh-ireland/1ea19a34-c468-11ed-a8bd-0210609a3fe2";
  const text = "Chillin with stupid Janne human...";
  // Hardcoded stuff end
  
  return (
    <View style={styles.container}>
         <View style={styles.header}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <View style={styles.headerText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
      </View>
        {postImageUrl ? (
        <Image source={{ uri: postImageUrl }} style={styles.postImage} />
      ) : null}

      <Text style={styles.text}>{text}</Text>

    </View>
  );
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
    color: "#000",
    fontSize: 14,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    marginBottom: 10,
  },  
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  headerText: {
  },
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


}) 

export default PostComponent;
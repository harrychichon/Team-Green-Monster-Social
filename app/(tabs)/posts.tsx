import { StyleSheet, ScrollView } from 'react-native';
import PostComponent from './../components/posts/PostComponent';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 

export default function Posts() {

    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: '#1e1e1e', paddingVertical: 25 }}>
        <ScrollView style={style.container}>
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
  container: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: 20,
    flex: 0,
    backgroundColor: '#1e1e1e' 
  },
    text: {
        color: '#89CFF0',
        fontSize: 24
    },
});
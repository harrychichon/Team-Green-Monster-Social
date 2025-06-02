import { StyleSheet, ScrollView } from "react-native";
import PostComponent from "./../components/posts/PostComponent";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Posts() {
  return (
    <SafeAreaProvider
      style={{ flex: 1, backgroundColor: "#1e1e1e", paddingVertical: 25 }}
    >
      <ScrollView style={style.container}>
        <PostComponent />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
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
});

import { StyleSheet, ScrollView, View } from 'react-native';
import PostComponent from './../components/posts/PostComponent';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SwitchUserButton from '../components/buttons/switchUserButton';
import AddPostButton from '../components/buttons/addPostButton';

export default function Posts() {
  return (
    <SafeAreaProvider style={styles.safeArea}>
      <View style={styles.topButtonContainer}>
        <SwitchUserButton />
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
    backgroundColor: '#1e1e1e',
    paddingTop: 25,
  },
  topButtonContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  scrollView: {
    paddingHorizontal: 20,
    backgroundColor: '#1e1e1e',
  },
  addButtonContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
});

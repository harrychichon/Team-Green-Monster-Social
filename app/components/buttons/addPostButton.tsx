import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';


export default function AddPostButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}

        onPress={() => router.push("/createPost")}

      >
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
    borderRadius: 100,
    width: 75,
    height: 75,
    borderColor: '#424242',
=======
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  },
});

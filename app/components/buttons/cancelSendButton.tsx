import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
type ButtonProps = {
  title: string;
};

export default function CancelSendButton({ title }: ButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/posts")}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  button: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    width: 150,
    height: 60,
    borderColor: "#757575",
    borderWidth: 4,
    justifyContent: "center",
  },
  text: {
    fontSize: 22,

    textAlign: "center",
  },
});

import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Text>Hello ReactNative!@!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

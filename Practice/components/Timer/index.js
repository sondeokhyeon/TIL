import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { red } from "ansi-colors";

class Timer extends Component {
  render() {
    return (
      <View style={style.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={style.upper}>
          <Text style={style.time}>25:00</Text>
        </View>
        <View style={style.lower}>
          <Text>BUTTONS HERE</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 120,
    fontWeight: "100"
  }
});

export default Timer;

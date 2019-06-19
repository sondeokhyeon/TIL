import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import propTypes from "prop-types";

const weathercases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "It's Raining",
    subtitle: "For more info Look outside",
    icon: "weather-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "It's Sunny",
    subtitle: "nice weather to go picnic",
    icon: "weather-sunny"
  },
  ThunderStorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "It's ThunderStorm",
    subtitle: "It's thunderstorm Let's rest at home.",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "It's Cluds",
    subtitle: "many clouds! temperature is cool?",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "It's Snow",
    subtitle: "Do you wanna Build a snow man",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "It's Drizzle",
    subtitle: "this raining is will A passing rain",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Haze",
    subtitle: "Don't know what that is 💩",
    icon: "weather-hail"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "Mist!",
    subtitle: "It's like you have no glasses on.",
    icon: "weather-fog"
  }
};

function Weather({ weatherName, cityName, temp }) {
  return (
    <LinearGradient
      colors={weathercases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weathercases[weatherName].icon}
        />
        <Text style={styles.temp}>{cityName}</Text>
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weathercases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weathercases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}
export default Weather;

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  weatherName: propTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  temp: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 20,
    marginBottom: 40
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});

import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Weather from "./weather";

const API_KEY = "74a0b3f32d546079369952bfa7336d47";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
    city: null
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }
  _getWeather = (lat, long) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          city: json.name,
          isLoaded: true
        });
      });
  };
  render() {
    const { isLoaded, error, temperature, name, city } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather
            weatherName={name}
            cityName={city}
            temp={Math.floor(temperature - 273.15)}
          />
        ) : (
          <LinearGradient colors={["#FFF", "#FDFA66"]} style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather</Text>
            {error ? <Text style={styles.error}>{error}</Text> : null}
          </LinearGradient>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  error: {
    color: "red",
    backgroundColor: "transparent",
    paddingBottom: 20,
    fontSize: 20
  },
  loading: {
    flex: 1,
    justifyContent: "flex-end",
    paddingLeft: 25,
    paddingBottom: 80
  },
  loadingText: {
    fontSize: 38,
    paddingBottom: 20
  }
});

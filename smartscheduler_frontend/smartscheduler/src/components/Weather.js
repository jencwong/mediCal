//==============================
//       DEPENDENCIES
//==============================
import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import axios from "axios";
import "../App2.css";

let baseURL = "https://medicalendar-app.herokuapp.com";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
}

//==============================
//        COMPONENTS
//==============================
class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      weathers: []
    };
    this.weathers = this.weathers.bind(this);
  }
  componentDidMount() {
    fetch(
      "https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=Stamford%252Cus",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": "682128a10amshbd866c7f1612a2ap1f9482jsn7c32b8f00d51"
        }
      }
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            weathers: result.weathers
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    const { error, isLoaded, weathers } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {weathers.map(weather => (
            <li key={weather.weather[0].description}>{weather.main.temp}</li>
          ))}
        </ul>
      );
    }
  }
}

export default Weather;

import React, { useState } from "react";
import axios from "axios";
import WeatherOverview from "./WeatherOverview";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function WeatherSearch(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setcity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      coordinates: response.data.coord,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCityChange(event) {
    setcity(event.target.value);
  }

  function search() {
    const apiKey = `d10172993467acc634527beee963898b`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherSearch">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city...🔍"
            className="place-input me-2"
            autoFocus="on"
            onChange={updateCityChange}
          />
          <input type="submit" className="btn btn-secondary" value="Search" />
        </form>
        <WeatherOverview data={weatherData} />
        <br />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

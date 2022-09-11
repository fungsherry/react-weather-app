import React from "react";
import "./Weather.css";

export default function WeatherOverview() {
  return (
    <div className="WeatherOverview">
      <div className="row">
        <h1>Hong Kong</h1>
        <h3>Saturday 17:00</h3>
        <div className="col-7">
          <h2>
            30<a href="/">°C</a> | <a href="/">°F</a>
          </h2>
          Weather Icon
          <h4>Rainy</h4>
        </div>
        <div className="col-5">
          <ul>
            <li>💦Humidity: 80%</li>
            <li>💨Wind: 5km/h</li>
          </ul>
          <h5>⬇️ 28°C ⬆️ 32°C</h5>
        </div>
      </div>
    </div>
  );
}

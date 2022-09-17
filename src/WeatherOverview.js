import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureConversion from "./TemperatureConversion";

export default function WeatherOverview(props) {
  return (
    <div className="WeatherOverview">
      <div className="row">
        <h1>{props.data.city}</h1>
        <h3>
          <FormattedDate date={props.data.date} />
        </h3>
        <div className="col-7">
          <h2>
            <TemperatureConversion celsius={props.data.temperature} />
          </h2>
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="mx-auto d-block"
          />
          <h4 className="text-center text-capitalize">
            {props.data.description}
          </h4>
        </div>
        <div className="col-5">
          <ul>
            <li>💦Humidity: {props.data.humidity}%</li>
            <li>💨Wind: {props.data.windspeed}km/h</li>
          </ul>
          <h5>
            <i className="fa-solid fa-temperature-arrow-down"></i>{" "}
            {Math.round(props.data.minTemp)}°C \{" "}
            <i className="fa-solid fa-temperature-arrow-up"></i>{" "}
            {Math.round(props.data.maxTemp)}°C
          </h5>
        </div>
      </div>
    </div>
  );
}

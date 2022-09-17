import React from "react";

export default function DailyForecast(props) {
  function formattedDay() {
    let forecastDay = new Date(props.data.dt * 1000);
    let day = forecastDay.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  let forecastIconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  return (
    <div className="DailyForecast">
      <div className="card text-center p-2">
        <div className="Forecast-day">{formattedDay()}</div>
        <img
          src={forecastIconUrl}
          alt={props.data.weather.description}
          className="mx-auto d-block"
        />
        <div className="Forecast-temperatures">
          <span className="Forecast-temperature-min">
            {Math.round(props.data.temp.min)}°
          </span>{" "}
          <span className="Forecast-temperature-max">
            <strong>{Math.round(props.data.temp.max)}°</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

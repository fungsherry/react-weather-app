import React, { useState } from "react";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="TemperatureConversion">
        {Math.round(props.celsius)}
        °C |{" "}
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    let fahrenheitTemp = (props.celsius * 9) / 5 + 32;
    return (
      <div className="TemperatureConversion">
        {Math.round(fahrenheitTemp)}
        <a href="/" onClick={showCelsius}>
          °C
        </a>{" "}
        | °F
      </div>
    );
  }
}

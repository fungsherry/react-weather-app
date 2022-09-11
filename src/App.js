import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch defaultCity="Hong Kong" />
      </div>
      <footer className="mt-3">
        <small>
          <a
            href="https://github.com/fungsherry/react-weather-app"
            target="_blank"
            rel="noreferrer noopener"
          >
            Open-source coded{" "}
          </a>
          by{" "}
          <a
            href="https://neon-cocada-8b1a7b.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Sherry Fung
          </a>
        </small>
      </footer>
    </div>
  );
}

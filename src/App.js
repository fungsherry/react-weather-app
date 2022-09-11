import React from "react";
import "./App.css";
import WeatherSearch from "./WeatherSearch";
import WeatherOverview from "./WeatherOverview";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch />
        <WeatherOverview />
      </div>
      <footer className="mt-3">
        <small>
          Open-source coded by{" "}
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

import React from "react";
import "./Weather.css";

export default function WeatherSearch() {
  return (
    <div className="WeatherSearch">
      <form>
        <input
          type="search"
          placeholder="Enter a place🔍"
          className="place-input me-2"
          autoFocus="on"
        />
        <input type="submit" className="btn btn-secondary" value="Search" />
      </form>
    </div>
  );
}

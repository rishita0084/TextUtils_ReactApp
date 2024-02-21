import React from "react";
import './Weather.css';

export default function Weather() {
  return (
    <div className="weather-container">
      <div className="card">
        <div className="containerWeather">
          <div className="cloud front">
            <span className="left-front" />
            <span className="right-front" />
          </div>
          <span className="sun sunshine" />
          <span className="sun" />
          <div className="cloud back">
            <span className="left-back" />
            <span className="right-back" />
          </div>
        </div>
        <div className="card-header">
          <span>
            Hyderabad, Telangana
            <br />
            India
          </span>
          <span>February 21</span>
        </div>
        <span className="temp">29°</span>
        <div className="temp-scale">
          <span>Celcius</span>
        </div>
      </div>
    </div>
  );
}

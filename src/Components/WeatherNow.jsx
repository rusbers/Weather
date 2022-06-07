import { useEffect, useState } from "react";

function WeatherNow(props) {
  const { currentWeather } = props;
  // const { degree, iconLink, city, howFeels, weather, sunsetTime, sunriseTime } = currentWeather;

  return (
    <>
      <div className="degrees degrees--weather">{currentWeather.degree}</div>
      <div className="weather-icon"></div>
      <div className="city">
        <span className="city__name">{props.city}</span>
        <button className="add-favorite">
          <span className="a11y-hidden">
            {'Push to add in favorite locations'}
          </span>
        </button>
      </div>
    </>
  )
}

export default WeatherNow
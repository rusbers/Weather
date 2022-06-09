import React, { useState, useEffect } from "react"
import SearchCity from "./SearchCity"
import WeatherContent from "./WeatherContent"
import { API, getFetchUrl } from "../../js/api";
import { WeatherInfo } from "../../js/storage";
import Context from "../../js/Context";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [currentCity, setCurrentCity] = useState('');
  const [nextForecast, setNextForecast] = useState([]);

  const contextValues = {
    currentWeather,
    setCurrentCity,
    nextForecast
  }

  const getCurrentForecast = async (currentCity) => {

    const fetchUrl = getFetchUrl(API.URL.WEATHER, currentCity);

    try {
      const fetchWeatherData = await fetch(fetchUrl);
      const weatherData = await fetchWeatherData.json();
      const showData = new WeatherInfo(weatherData);
      setCurrentWeather(showData)
    } catch (error) {
      console.log(error)
    }
  }

  const getFutureForecast = async (currentCity) => {
    const fetchUrl = getFetchUrl(API.URL.FORECAST, currentCity);

    try {
      const fetchForecastData = await fetch(fetchUrl);
      const forecastData = await fetchForecastData.json();
      setNextForecast(forecastData.list);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!currentCity) return;

    getCurrentForecast(currentCity)
    getFutureForecast(currentCity)
  }, [currentCity])

  return (
    <div className="container">
      <div className="weather-content">
        <Context.Provider value={contextValues}>
          <SearchCity />
          <WeatherContent />
        </Context.Provider>
      </div>
    </div>
  )
}

export default App

import React, { useState, useEffect } from "react"
import SearchCity from "./SearchCity"
import WeatherContent from "./WeatherContent"
import { API, forecastRequest } from "../../js/network";
import { WeatherInfo } from "../../js/storage";
import { WeatherContext } from "../../js/Context";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [currentCity, setCurrentCity] = useState('');
  const [nextForecast, setNextForecast] = useState([]);

  const getCurrentForecast = async (cityName) => {
    try {
      const currentForecast = await forecastRequest(API.URL.WEATHER, cityName);
      const showData = new WeatherInfo(currentForecast);
      setCurrentWeather(showData);
    } catch (error) {
      console.log(error) // to figure out how to handle the error!
    }
  }

  const getFutureForecast = async (cityName) => {
    try {
      const futureForecast = await forecastRequest(API.URL.FORECAST, cityName);
      setNextForecast(futureForecast.list);
    } catch(error) {
      console.log(error);
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
        <WeatherContext.Provider value={{ currentWeather, setCurrentCity, nextForecast}}>
          <SearchCity />
          <WeatherContent />
        </WeatherContext.Provider>
      </div>
    </div>
  )
}

export default App

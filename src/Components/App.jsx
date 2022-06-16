import React, { useEffect } from "react"
import SearchCity from "./SearchCity"
import WeatherContent from "./WeatherContent"
import { API, forecastRequest } from "../../js/network";
import { WeatherInfo } from "../../js/storage";
import { setNextForecast, setCurrentForecast } from "../../js/store/action/actionCreators";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const currentCity = useSelector(state => state.forecast.currentCity);

  useEffect(() => {
    if (!currentCity) return;
    getCurrentForecast(currentCity)
    getFutureForecast(currentCity)
  }, [currentCity])

  async function getCurrentForecast(cityName) {
    try {
      const currentForecast = await forecastRequest(API.URL.WEATHER, cityName);

      const currentForecastData = new WeatherInfo(currentForecast);

      dispatch(setCurrentForecast(currentForecastData))
    } catch (error) {
      console.log(error) // to figure out how to handle the error!
    }
  }

  async function getFutureForecast(cityName) {
    try {
      const futureForecast = await forecastRequest(API.URL.FORECAST, cityName);

      dispatch(setNextForecast(futureForecast.list))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="weather-content">
        <SearchCity />
        <WeatherContent />
      </div>
    </div>
  )
}

export default App

import React, { useEffect } from "react"
import SearchCity from "./SearchCity"
import WeatherContent from "./WeatherContent"
import { API, forecastRequest } from "../../js/network";
import { WeatherInfo } from "../../js/storage";
import { SET_CURRENT_FORECAST, SET_NEXT_FORECAST } from "../../js/store/store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const currentCity = useSelector(state => state.currentCity);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentCity) return;
    getCurrentForecast(currentCity)
    getFutureForecast(currentCity)
  }, [currentCity])

  async function getCurrentForecast(cityName) {
    try {
      const currentForecast = await forecastRequest(API.URL.WEATHER, cityName);

      const showData = new WeatherInfo(currentForecast);

      dispatch({ type: SET_CURRENT_FORECAST, currentForecast: showData })
    } catch (error) {
      console.log(error) // to figure out how to handle the error!
    }
  }

  async function getFutureForecast(cityName) {
    try {
      const futureForecast = await forecastRequest(API.URL.FORECAST, cityName);

      dispatch({ type: SET_NEXT_FORECAST, nextForecast: futureForecast.list })
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

import React, { useEffect } from "react"
import { WeatherPage } from "./WeatherPage";
import { API, forecastRequest } from "../../js/network";
import { WeatherInfo } from "../../js/storage";
import { setNextForecast, setCurrentForecast } from "../../js/store/action/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout"
import { HelpPage } from './HelpPage';

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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<WeatherPage />} />
          <Route path='help-page' element={<HelpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

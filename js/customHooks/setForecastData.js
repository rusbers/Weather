import { useEffect } from "react";
import { API } from "../network";
import { forecastRequest } from "../network";
import { WeatherInfo } from "../storage";
import { setCurrentForecast, setNextForecast } from '../../store/slices/forecastSlice';

async function getCurrentForecast(cityName, dispatch) {
  try {
    const currentForecast = await forecastRequest(API.URL.WEATHER, cityName);

    const currentForecastData = new WeatherInfo(currentForecast);

    dispatch(setCurrentForecast(currentForecastData))
  } catch (error) {
    console.log(error) // TODO: to figure out how to handle the error!
  }
}

async function getFutureForecast(cityName, dispatch) {
  try {
    const futureForecast = await forecastRequest(API.URL.FORECAST, cityName);

    dispatch(setNextForecast(futureForecast.list))
  } catch (error) {
    console.log(error);
  }
}

function setForecastData(dependCity, dispatch) {
  useEffect(() => {
    if (!dependCity) return;
    getCurrentForecast(dependCity, dispatch)
    getFutureForecast(dependCity, dispatch)
  }, [dependCity])
}

export { setForecastData };

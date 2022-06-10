import { useContext } from "react";
import {WeatherContext} from "../../js/Context";
import ForecastItem from "./ForecastItem";
import { ForecastData } from "../../js/storage";

function Forecast() {
  const contextValues = useContext(WeatherContext);
  const {nextForecast} = contextValues;

  const forecastToRender = [];

  if (!nextForecast) return;

  nextForecast.forEach((forecastDay, index) => {
    const forecastData = new ForecastData(forecastDay);

    forecastToRender.push(<ForecastItem forecastData={forecastData} key={index}/>)
  })

  return (
    <>
      <div className="city__name"></div>
      <ul className="forecast-list">
        {forecastToRender}
      </ul>
    </>
  )
}

export default Forecast
import ForecastItem from "./ForecastItem";
import { ForecastData } from "../../js/storage";
import { useSelector } from "react-redux";

function Forecast() {
  const nextForecast = useSelector(state => state.forecast.nextForecast);

  const forecastToRender = [];

  if (!nextForecast) return;

  nextForecast.forEach((forecastDay, index) => {
    const forecastData = new ForecastData(forecastDay);

    forecastToRender.push(<ForecastItem forecastData={forecastData} key={index} />)
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
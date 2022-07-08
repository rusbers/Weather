import ForecastItem from "./ForecastItem";
import { ForecastData } from "../../network/storage";
import { useSelector } from "react-redux";

function Forecast() {
  const nextForecast = useSelector(state => state.forecast.nextForecast);

  if (!nextForecast) return;

  return (
    <>
      <div className="city__name"></div>
      <ul className="forecast-list">
        {
          nextForecast.map((forecastDay, index) => {
            const forecastData = new ForecastData(forecastDay);

            return <ForecastItem forecastData={forecastData} key={index} />;
          })
        }
      </ul>
    </>
  )
}

export default Forecast
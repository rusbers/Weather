import SearchCity from "../Components/SearchCity"
import WeatherOptions from "../Components/WeatherOptions"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentForecast, fetchFutureForecast } from "../../store/slices/forecastSlice";
import { useEffect } from "react";

function WeatherPage() {
  const dispatch = useDispatch();

  const currentCity = useSelector(state => state.forecast.currentCity);

  useEffect(() => {
    if (!currentCity) return;

    dispatch(fetchCurrentForecast(currentCity));
    dispatch(fetchFutureForecast(currentCity));
  }, [currentCity])

  return (
    <div className="content__weather">
      <SearchCity />
      <WeatherOptions />
      <div className="link">
        <Link to="/help-page">How does it work?</Link>
      </div>
    </div>
  )
}

export { WeatherPage }
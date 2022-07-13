import SearchCity from "../Components/SearchCity"
import WeatherOptions from "../Components/WeatherOptions"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentForecast, fetchFutureForecast } from "../../store/slices/forecastSlice";
import { useEffect } from "react";
import { Box } from "@mui/material";

function WeatherPage() {
  const dispatch = useDispatch();

  const currentCity = useSelector(state => state.forecast.currentCity);

  useEffect(() => {
    if (!currentCity) return;

    dispatch(fetchCurrentForecast(currentCity));
    dispatch(fetchFutureForecast(currentCity));
  }, [currentCity])

  return (
    <Box
      display='flex'
      height='460px'
      flexDirection='column'
    >
      <SearchCity />
      <WeatherOptions />
      <Box textAlign='center'>
        <Link to="/help-page">How does it work?</Link>
      </Box>
    </Box>
  )
}

export { WeatherPage }
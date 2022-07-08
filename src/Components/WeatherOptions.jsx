import { useEffect } from "react";
import Tabs from "./Tabs";
import Locations from "./Locations";
import { getFavoriteCities } from "../../network/storage";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCity } from "../../store/slices/forecastSlice";
import { setFavoriteCities } from '../../store/slices/favoriteCitiesSlice';

function WeatherOptions() {
  const favoriteCities = useSelector(state => state.favorites.favoriteCities);
  const dispatch = useDispatch();

  useEffect(() => {
    const favCities = getFavoriteCities();

    if (!favCities) return;

    const currentFavoriteCity = favCities.at(-1);

    dispatch(setCurrentCity(currentFavoriteCity));
    dispatch(setFavoriteCities(favCities))
  }, [])

  useEffect(() => {
    localStorage.setItem('favorite cities', JSON.stringify(favoriteCities))
  }, [favoriteCities])

  return (
    <div className="weather-options">
      <Tabs />
      <Locations />
    </div>
  )
}

export default WeatherOptions
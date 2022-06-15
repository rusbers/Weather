import { useEffect } from "react";
import Tabs from "./Tabs";
import Locations from "./Locations";
import { getFavoriteCities } from "../../js/storage";
import { useDispatch, useSelector } from "react-redux";
import { SET_CURRENT_CITY, SET_FAVORITE_CITIES } from "../../js/store/store";

function WeatherContent() {
  const favoriteCities = useSelector(state => state.favoriteCities);
  const dispatch = useDispatch();

  useEffect(() => {
    const favCities = getFavoriteCities();

    if (!favCities) return;

    const currentFavoriteCity = favCities.at(-1);

    dispatch({type: SET_CURRENT_CITY, cityName: currentFavoriteCity})
    dispatch({type: SET_FAVORITE_CITIES, favoriteCities: favCities})
  }, [])

  useEffect(() => {
    localStorage.setItem('favorite cities', JSON.stringify(favoriteCities))
  }, [favoriteCities])

  return (
      <div className="weather-content__inner">
        <Tabs />
        <Locations />
      </div>
  )
}

export default WeatherContent
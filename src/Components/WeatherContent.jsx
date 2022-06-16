import { useEffect } from "react";
import Tabs from "./Tabs";
import Locations from "./Locations";
import { getFavoriteCities } from "../../js/storage";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCity, setFavoriteCities } from "../../js/store/action/actionCreators";

function WeatherContent() {
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
    <div className="weather-content__inner">
      <Tabs />
      <Locations />
    </div>
  )
}

export default WeatherContent
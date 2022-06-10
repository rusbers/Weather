import { useState, useEffect, useContext } from "react";
import Tabs from "./Tabs";
import Locations from "./Locations";
import { getFavoriteCities } from "../../js/storage";
import { WeatherContext, FavoriteCitiesContext } from "../../js/Context";

function WeatherContent() {
  const [favoriteCities, setFavoriteCities] = useState([]);

  const weatherContextValues = useContext(WeatherContext);
  const { setCurrentCity } = weatherContextValues;

  useEffect(() => {
    const favCities = getFavoriteCities();

    if (!favCities) return;

    const currentFavoriteCity = favCities.at(-1);

    setCurrentCity(currentFavoriteCity);

    setFavoriteCities(favCities);
  }, [])

  useEffect(() => {
    localStorage.setItem('favorite cities', JSON.stringify(favoriteCities))
  }, [favoriteCities])

  return (
    <FavoriteCitiesContext.Provider value={{favoriteCities, setFavoriteCities}}>
      <div className="weather-content__inner">
        <Tabs />
        <Locations />
      </div>
    </FavoriteCitiesContext.Provider>
  )
}

export default WeatherContent
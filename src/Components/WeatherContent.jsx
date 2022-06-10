import { useState, useEffect, useContext } from "react";
import Tabs from "./Tabs";
import Locations from "./Locations";
import { getFavoriteCities } from "../../js/storage";
import { WeatherContext, FavoriteCitiesContext } from "../../js/Context";

function WeatherContent() {
  const [favoriteCities, setFavoriteCities] = useState([]);

  const contextValues = useContext(WeatherContext);
  const { setCurrentCity } = contextValues;

  useEffect(() => {
    const cities = Array.from(getFavoriteCities());

    if (!cities) return;

    const currentFavoriteCity = cities.at(-1);

    setCurrentCity(currentFavoriteCity);

    setFavoriteCities(cities);
  }, [])

  useEffect(() => {
    localStorage.setItem('favorite cities', JSON.stringify(favoriteCities))
  }, [favoriteCities])

  return (
    <FavoriteCitiesContext.Provider value={{favoriteCities, setFavoriteCities}}>
      <div className="weather-content__inner">
        <Tabs />
        <Locations favoriteCities={favoriteCities} setFavoriteCities={setFavoriteCities} />
      </div>
    </FavoriteCitiesContext.Provider>
  )
}

export default WeatherContent
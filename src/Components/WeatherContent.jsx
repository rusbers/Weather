import { useState, useEffect, useContext } from "react";
import Tabs from "./Tabs";
import Locations from "./Locations";
import { getFavoriteCities } from "../../js/storage";
import Context from "../../js/Context";

function WeatherContent() {
  const [ favoriteCities, setFavoriteCities ] = useState([]);

  const contextValues = useContext(Context);
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
    <div className="weather-content__inner">
      <Tabs favoriteCities={favoriteCities} setFavoriteCities={setFavoriteCities} />
      <Locations favoriteCities={favoriteCities} setFavoriteCities={setFavoriteCities}/>
    </div>
  )
}

export default WeatherContent
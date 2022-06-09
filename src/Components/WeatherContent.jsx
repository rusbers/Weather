import { useState, useEffect } from "react";
import Tabs from "./Tabs";
import Locations from "./Locations";
import { getFavoriteCities } from "../../js/storage";

function WeatherContent(props) {
  const [ favoriteCities, setFavoriteCities ] = useState([]);

  const {currentWeather, currentCity, setCurrentCity, nextForecast} = props;

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
      <Tabs currentWeather={currentWeather} currentCity={currentCity} favoriteCities={favoriteCities} setFavoriteCities={setFavoriteCities} nextForecast={nextForecast}/>
      <Locations setFavoriteCities={setFavoriteCities} favoriteCities={favoriteCities} setCurrentCity={setCurrentCity}/>
    </div>
  )
}

export default WeatherContent
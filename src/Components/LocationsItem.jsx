import { useContext } from "react";
import {Context, FavoriteCitiesContext } from "../../js/Context";

function LocationsItem({ favoriteCity }) {
  const contextValues = useContext(Context);
  const {setCurrentCity} = contextValues;

  const favCitiesContext = useContext(FavoriteCitiesContext);
  const { favoriteCities, setFavoriteCities } = favCitiesContext;

  const handlerSetCurrentCity = () => {
    setCurrentCity(favoriteCity);
  }

  const handlerRemoveFavoriteCity = () => {
    setFavoriteCities(() => favoriteCities.filter((city) => city !== favoriteCity))
  }

  return (
    <li className="locations__list-item">
      <a href="#" onClick={handlerSetCurrentCity}>{favoriteCity}</a>
      <button className="remove" onClick={handlerRemoveFavoriteCity}></button>
    </li>
  )
}

export default LocationsItem;
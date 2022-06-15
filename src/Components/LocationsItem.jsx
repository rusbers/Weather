import { REMOVE_CITY_FROM_FAVORITES, store } from "../../js/store/store";
import { useDispatch } from "react-redux";
import { SET_CURRENT_CITY } from "../../js/store/store";

function LocationsItem({ favoriteCity }) {
  const dispatch = useDispatch();

  const handlerSetCurrentCity = () => {
    dispatch({type: SET_CURRENT_CITY, cityName: favoriteCity})
  }

  const handlerRemoveFavoriteCity = () => {
    dispatch({type: REMOVE_CITY_FROM_FAVORITES, cityToRemove: favoriteCity})
  }

  return (
    <li className="locations__list-item">
      <a href="#" onClick={handlerSetCurrentCity}>{favoriteCity}</a>
      <button className="remove" onClick={handlerRemoveFavoriteCity}></button>
    </li>
  )
}

export default LocationsItem;
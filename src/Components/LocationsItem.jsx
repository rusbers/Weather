import { useDispatch } from "react-redux";
import { setCurrentCity, removeCityFromFavorites } from "../../js/store/action/actionCreators";

function LocationsItem({ favoriteCity }) {
  const dispatch = useDispatch();

  const handlerSetCurrentCity = () => {
    dispatch(setCurrentCity(favoriteCity));
  }

  const handlerRemoveFavoriteCity = () => {
    dispatch(removeCityFromFavorites(favoriteCity))
  }

  return (
    <li className="locations__list-item">
      <a href="#" onClick={handlerSetCurrentCity}>{favoriteCity}</a>
      <button className="remove" onClick={handlerRemoveFavoriteCity}></button>
    </li>
  )
}

export default LocationsItem;
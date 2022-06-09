function LocationsItem(props) {

  const { favoriteCities, setFavoriteCities, favoriteCity, setCurrentCity } = props;

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
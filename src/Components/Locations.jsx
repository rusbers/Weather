import LocationsItem from "./LocationsItem";
import { useSelector } from "react-redux";

function Locations() {
  const favoriteCities = useSelector(state => state.favorites.favoriteCities)

  return (
    <div className="locations">
      <p className="locations__title">{'Added Locations:'}</p>
      <div className="locations__inner">
        <div className="locations__content scroll">
          <ul className="locations__list">
            {favoriteCities.map((favoriteCity, index) => <LocationsItem favoriteCity={favoriteCity} key={index} />)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Locations;
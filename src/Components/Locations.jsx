import LocationsItem from "./LocationsItem";
import { FavoriteCitiesContext } from "../../js/Context";
import { useContext } from "react";

function Locations() {
  const favCitiesContext = useContext(FavoriteCitiesContext);
  const { favoriteCities } = favCitiesContext;

  const favoriteCitiesListToRender = [];

  favoriteCities.forEach((favoriteCity, index) => {
    favoriteCitiesListToRender.push(<LocationsItem favoriteCity={favoriteCity} key={index} />)
  })

  return (
    <div className="locations">
      <p className="locations__title">{'Added Locations:'}</p>
      <div className="locations__inner">
        <div className="locations__content scroll">
          <ul className="locations__list">
            {favoriteCitiesListToRender}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Locations;
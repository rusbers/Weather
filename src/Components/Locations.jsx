import LocationsItem from "./LocationsItem";

function Locations(props) {

  const { setFavoriteCities, favoriteCities } = props;

  const favoriteCitiesListToRender = [];

  favoriteCities.forEach((favoriteCity, index) => {
    favoriteCitiesListToRender.push(<LocationsItem 
                                      favoriteCity={favoriteCity} 
                                      key={index} 
                                      favoriteCities={favoriteCities}
                                      setFavoriteCities={setFavoriteCities}
                                    />)
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
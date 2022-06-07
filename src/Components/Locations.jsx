import LocationsItem from "./LocationsItem";

function Locations() {

  return (
    <div className="locations">
      <p className="locations__title">{'Added Locations:'}</p>
      <div className="locations__inner">
        <div className="locations__content scroll">
          <ul className="locations__list">
            {/* Here will be list of location items <LocationItem props={someProps}/>*/}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Locations;
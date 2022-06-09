import { useState } from "react";
import WeatherNow from "./weatherNow";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";

function Tabs({ favoriteCities, setFavoriteCities }) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="tabs">
      <div className="triggers">
        <a className={`triggers__item ${(tabIndex === 0) ? 'triggers__item--active' : ''}`} onClick={() => setTabIndex(0)}>{'Now'}</a>
        <a className={`triggers__item ${(tabIndex === 1) ? 'triggers__item--active' : ''}`} onClick={() => setTabIndex(1)}>{'Details'}</a>
        <a className={`triggers__item ${(tabIndex === 2) ? 'triggers__item--active' : ''}`} onClick={() => setTabIndex(2)}>{'Forecast'}</a>
      </div>
      <div className="tabs-content">
        <div className={`tabs-content__item ${(tabIndex === 0) ? 'tabs-content__item--active' : ''} now`}>
          <WeatherNow favoriteCities={favoriteCities} setFavoriteCities={setFavoriteCities}/>
        </div>
        <div className={`tabs-content__item ${(tabIndex === 1) ? 'tabs-content__item--active' : ''} details`}>
          <WeatherDetails />
        </div>
        <div className={`tabs-content__item ${(tabIndex === 2) ? 'tabs-content__item--active' : ''} scroll forecast`}>
          <Forecast />
        </div>
      </div>
    </div>

  )
}

export default Tabs
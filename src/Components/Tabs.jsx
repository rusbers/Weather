import { useState } from "react";
import WeatherNow from "./weatherNow";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";

const TABS = {
  now: 'now',
  details: 'details',
  forecast: 'forecast'
}

function Tabs() {
  const [tab, setTab] = useState(TABS.now)

  return (
    <div className="tabs">
      <div className="triggers">
        <a className={`triggers__item ${(tab === TABS.now) ? 'triggers__item--active' : ''}`} onClick={() => setTab(TABS.now)}>{'Now'}</a>
        <a className={`triggers__item ${(tab === TABS.details) ? 'triggers__item--active' : ''}`} onClick={() => setTab(TABS.details)}>{'Details'}</a>
        <a className={`triggers__item ${(tab === TABS.forecast) ? 'triggers__item--active' : ''}`} onClick={() => setTab(TABS.forecast)}>{'Forecast'}</a>
      </div>
      <div className="tabs-content">
        <div className={`tabs-content__item ${(tab === TABS.now) ? 'tabs-content__item--active' : ''} now`}>
          <WeatherNow />
        </div>
        <div className={`tabs-content__item ${(tab === TABS.details) ? 'tabs-content__item--active' : ''} details`}>
          <WeatherDetails />
        </div>
        <div className={`tabs-content__item ${(tab === TABS.forecast) ? 'tabs-content__item--active' : ''} scroll forecast`}>
          <Forecast />
        </div>
      </div>
    </div>

  )
}

export default Tabs
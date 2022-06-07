function ForecastItem() {

  return (
    <li className="forecast-list__item">
      <div className="forecast-time">
        <span className="forecast-time__date"></span>
        <span className="forecast-time__hour"></span>
      </div>
      <div className="forecast-weather">
        <ul className="forecast-weather__list">
          <ul className="weather__item">
            <div>{'Temperature: '}<span className="forecast-weather__temperature degrees degrees--show"></span></div>
          </ul>
          <ul className="weather__item">
            <div>{'Feels like: '}<span className="forecast-weather__feels-like degrees degrees--show"></span></div>
          </ul>
        </ul>
        <div className="forecast-status">
          <div className="forecast-status__name"></div>
          <span className="forecast-status__icon"></span>
        </div>
      </div>
    </li>
  )
}
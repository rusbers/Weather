import getDate from "../../network/date";

function ForecastItem({ forecastData }) {

  const { time, temperature, feelsLike, icon, weather } = forecastData;

  return (
    <li className="forecast-list__item">
      <div className="forecast-time">
        <span className="forecast-time__date">{getDate.dayMonth(time)}</span>
        <span className="forecast-time__hour">{getDate.hourMinutes(time)}</span>
      </div>
      <div className="forecast-weather">
        <ul className="forecast-weather__list">
          <ul className="weather__item">
            <div>Temperature: {temperature}<span className="forecast-weather__temperature degrees degrees--show"></span></div>
          </ul>
          <ul className="weather__item">
            <div>Feels like: {feelsLike}<span className="forecast-weather__feels-like degrees degrees--show"></span></div>
          </ul>
        </ul>
        <div className="forecast-status">
          <div className="forecast-status__name">{weather}</div>
          <span className="forecast-status__icon" style={{ backgroundImage: `${icon}` }}></span>
        </div>
      </div>
    </li>
  )
}

export default ForecastItem
import getDate from "../../js/date";

function WeatherDetails({ currentWeather }) {
  const { degree, city, howFeels, weather, sunsetTime, sunriseTime } = currentWeather;

  return (
    <>
      <div className="details__city city__name">{city}</div>
      <ul className="weather-list">
        <li className="weather-list__item">
          {(degree) ? `Temperature ${degree}` : ''}
          <span className={`degrees degrees--weather ${degree ? 'degrees--show' : ''}`}></span>
        </li>
        <li className="weather-list__item">
          {(howFeels ? `Feels like: ${howFeels}` : '')}
          <span className={`details-feel degrees degrees--weather ${degree ? 'degrees--show' : ''}`}></span>
        </li>
        <li className="weather-list__item">
          {(weather) ? `Weather ${weather}` : ''}
          <span className="detail-weather"></span>
        </li>
        <li className="weather-list__item">
          {sunriseTime ? `Sunrise: ${getDate.hourMinutes(sunriseTime)}` : ''}
          <span className="detail-sunrise"></span>
        </li>
        <li className="weather-list__item">
          {sunsetTime ? `Sunset: ${getDate.hourMinutes(sunsetTime)}` : ''}
          <span className="detail-sunset"></span>
        </li>
      </ul>
    </>
  )
}

export default WeatherDetails
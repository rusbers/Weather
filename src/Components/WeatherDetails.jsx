function WeatherDetails() {

  return (
    <>
      <div className="details__city city__name"></div>
      <ul className="weather-list">
        <li className="weather-list__item">{'Temperature: '}<span className="degrees degrees--weather"></span></li>
        <li className="weather-list__item">{'Feels like: '}<span className="details-feel degrees degrees--weather"></span></li>
        <li className="weather-list__item">{'Weather: '}<span className="detail-weather"></span></li>
        <li className="weather-list__item">{'Sunrise: '}<span className="detail-sunrise"></span></li>
        <li className="weather-list__item">{'Sunset: '}<span className="detail-sunset"></span></li>
      </ul>
    </>
  )
}

export default WeatherDetails
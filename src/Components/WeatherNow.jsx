import { useContext } from "react";
import Context from "../../js/Context";

function WeatherNow({ favoriteCities, setFavoriteCities }) {
  const contextValues = useContext(Context);
  const { currentWeather } = contextValues;

  const { degree, iconLink, city } = currentWeather;

  const handlerAddToFavorite = (cityName) => {
    const [isCityinList] = favoriteCities.filter(city => city === cityName);

    if (isCityinList === cityName) return;

    setFavoriteCities((favoriteCities) => {
      return [...favoriteCities, cityName];
    });
  } 

  return (
    <>
      <div className={`degrees degrees--weather ${degree ? 'degrees--show' : ''}`}>{degree}</div>
      <div className="weather-icon" style={{ backgroundImage: `${iconLink}` }}></div>
      <div className="city">
        <span className="city__name">{city}</span>
        <button className="add-favorite" onClick={() => handlerAddToFavorite(city)}>
          <span className="a11y-hidden">
            {'Push to add in favorite locations'}
          </span>
        </button>
      </div>
    </>
  )
}

export default WeatherNow
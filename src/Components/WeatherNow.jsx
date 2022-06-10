import { useContext } from "react";
import { WeatherContext, FavoriteCitiesContext } from "../../js/Context";

function WeatherNow() {
  const weatherContextValues = useContext(WeatherContext);
  const { currentWeather } = weatherContextValues;
  const { degree, iconLink, city } = currentWeather;

  const favCitiesContext = useContext(FavoriteCitiesContext);
  const { favoriteCities, setFavoriteCities } = favCitiesContext;

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
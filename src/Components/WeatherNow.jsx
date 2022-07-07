import { useDispatch, useSelector } from "react-redux";
import { addFavoriteCity } from '../../store/slices/favoriteCitiesSlice';

function WeatherNow() {
  const dispatch = useDispatch()
  const currentForecast = useSelector(state => state.forecast.currentForecast);
  const { degree, iconLink, city } = currentForecast;

  const favoriteCities = useSelector(state => state.favorites.favoriteCities)

  const handlerAddToFavorite = (cityName) => {
    const [isCityinList] = favoriteCities.filter(city => city === cityName);

    if (isCityinList === cityName) return;

    dispatch(addFavoriteCity(cityName))
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
import { useDispatch, useSelector } from "react-redux";
import { ADD_FAVORITE_CITY } from "../../js/store/store";

function WeatherNow() {
  const dispatch = useDispatch()
  const currentForecast = useSelector(state => state.currentForecast);
  const { degree, iconLink, city } = currentForecast;

  const favoriteCities = useSelector(state => state.favoriteCities)

  const handlerAddToFavorite = (cityName) => {
    const [isCityinList] = favoriteCities.filter(city => city === cityName);

    if (isCityinList === cityName) return;

    dispatch({type: ADD_FAVORITE_CITY, newFavoriteCity: cityName})
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
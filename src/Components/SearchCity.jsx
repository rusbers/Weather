import {  useState } from "react";
import { getFetchUrl } from "../../../WeatherApp/js/api";
import { API } from "../../../WeatherApp/js/api";
import { WeatherInfo } from "../../js/storage";

function SearchCity(props) {
  const [inputValue, setInputValue] = useState('');
  const { setCurrentWeather} = props;

  const handlerCityForecastData = async (e) => {
    e.preventDefault();

    const currentCity = inputValue;
    const fetchUrl = getFetchUrl(API.URL.WEATHER, currentCity);

    try {
      const fetchWeatherData = await fetch(fetchUrl);
      const weatherData = await fetchWeatherData.json();
      const showData = new WeatherInfo(weatherData);
      setCurrentWeather(showData)
      // console.log(showData)
    } catch (error) {
      console.log(error)
    }

    setInputValue('');
  }

  return (
    <form className="form" id="form" onSubmit={handlerCityForecastData}>
      <label>
        <span className="a11y-hidden">{'City name'}</span>
        <input className="form__input" type="text" placeholder="City" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      </label>
      <button className="form__button" type="submit">
        <span className="a11y-hidden">
          {'Search'}
        </span>
      </button>
    </form>
  )
}

export default SearchCity
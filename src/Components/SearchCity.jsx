import { useState } from "react";
import { setCurrentCity } from '../../store/slices/forecastSlice';
import { useDispatch } from "react-redux";

function SearchCity() {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const handlerForecastData = (e) => {
    e.preventDefault();

    const currentCity = inputValue;

    dispatch(setCurrentCity(currentCity));

    setInputValue('');
  }

  return (
    <form className="form" id="form" onSubmit={handlerForecastData}>
      <label>
        <span className="a11y-hidden">{'City name'}</span>
        <input className="form__input" type="text" placeholder="City" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <button className="form__button" type="submit">
        <span className="a11y-hidden">
          Search
        </span>
      </button>
    </form>
  )
}

export default SearchCity
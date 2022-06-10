import { useState, useContext} from "react";
import {Context} from "../../js/Context";

function SearchCity() {
  const [inputValue, setInputValue] = useState('');

  const contextValues = useContext(Context);
  const  { setCurrentCity } = contextValues;

  const handlerForecastData = (e) => {
    e.preventDefault();

    const currentCity = inputValue;

    setCurrentCity(currentCity)

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
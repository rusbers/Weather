import * as ACTION from './actionNames';

const setCurrentCity = (payload) => ({ type: ACTION.SET_CURRENT_CITY, payload });

const setCurrentForecast = (payload) => ({ type: ACTION.SET_CURRENT_FORECAST, payload });

const setNextForecast = (payload) => ({ type: ACTION.SET_NEXT_FORECAST, payload });

const setFavoriteCities = (payload) => ({ type: ACTION.SET_FAVORITE_CITIES, payload });

const addFavoriteCity = (payload) => ({ type: ACTION.ADD_FAVORITE_CITY, payload });

const removeCityFromFavorites = (payload) => ({ type: ACTION.REMOVE_CITY_FROM_FAVORITES, payload });


export {
  setCurrentCity,
  setCurrentForecast,
  setNextForecast,
  setFavoriteCities,
  addFavoriteCity,
  removeCityFromFavorites
};
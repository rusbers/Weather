import * as ACTION from './actionNames';

function actionCreator(type) {
  return (payload) => {
    return {
      type,
      payload
    }
  }
}

const setCurrentCity = actionCreator(ACTION.SET_CURRENT_CITY);

const setCurrentForecast = actionCreator(ACTION.SET_CURRENT_FORECAST);

const setNextForecast = actionCreator(ACTION.SET_NEXT_FORECAST);

const setFavoriteCities = actionCreator(ACTION.SET_FAVORITE_CITIES);

const addFavoriteCity = actionCreator(ACTION.ADD_FAVORITE_CITY);

const removeCityFromFavorites = actionCreator(ACTION.REMOVE_CITY_FROM_FAVORITES);


export {
  setCurrentCity,
  setCurrentForecast,
  setNextForecast,
  setFavoriteCities,
  addFavoriteCity,
  removeCityFromFavorites
};
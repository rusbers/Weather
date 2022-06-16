import * as ACTION from '../action/actionNames';

const defaultState = {
  favoriteCities: []
}

function favoriteCitiesReducer(state = defaultState, action) {
  switch (action.type) {
    case ACTION.SET_FAVORITE_CITIES:
      return {...state, favoriteCities: action.payload};
    case ACTION.ADD_FAVORITE_CITY:
      return {...state, favoriteCities: [...state.favoriteCities, action.payload]};
    case ACTION.REMOVE_CITY_FROM_FAVORITES:
      return {...state, favoriteCities: state.favoriteCities.filter((favoriteCity) => favoriteCity !== action.payload)}
    default:
      return state;
  }
}

export default favoriteCitiesReducer;
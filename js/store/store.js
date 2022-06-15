import { legacy_createStore as createStore} from 'redux';

// actions

const SET_CURRENT_CITY = 'SET_CURRENT_CITY';
const SET_CURRENT_FORECAST = 'SET_CURRENT_FORECAST';
const SET_NEXT_FORECAST = 'SET_NEXT_FORECAST';
const SET_FAVORITE_CITIES = 'SET_FAVORITE_CITIES';
const ADD_FAVORITE_CITY = 'ADD_FAVORITE_CITY';
const REMOVE_CITY_FROM_FAVORITES = 'REMOVE_CITY_FROM_FAVORITES';

// default state

const initialState = {
  currentCity: '',
  currentForecast: {},
  nextForecast: [],
  favoriteCities: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_CITY:
      return {...state, currentCity: action.cityName};
    case SET_CURRENT_FORECAST:
      return {...state, currentForecast: action.currentForecast};
    case SET_NEXT_FORECAST:
      return {...state, nextForecast: action.nextForecast};
    case SET_FAVORITE_CITIES:
      return {...state, favoriteCities: action.favoriteCities};
    case ADD_FAVORITE_CITY:
      return {...state, favoriteCities: [...state.favoriteCities, action.newFavoriteCity]};
    case REMOVE_CITY_FROM_FAVORITES:
      return {...state, favoriteCities: state.favoriteCities.filter((favoriteCity) => favoriteCity !== action.cityToRemove)}
    default:
      return state;
  }
}

const store = createStore(reducer);

export { store, SET_CURRENT_CITY, SET_CURRENT_FORECAST, SET_NEXT_FORECAST, SET_FAVORITE_CITIES, ADD_FAVORITE_CITY, REMOVE_CITY_FROM_FAVORITES };


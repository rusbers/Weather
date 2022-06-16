import * as ACTION from '../action/actionNames';

const defaultState = {
  currentCity: '',
  currentForecast: {},
  nextForecast: [],
}

function forecastReducer(state = defaultState, action) {
  switch (action.type) {
    case ACTION.SET_CURRENT_CITY:
      return {...state, currentCity: action.payload};
    case ACTION.SET_CURRENT_FORECAST:
      return {...state, currentForecast: action.payload};
    case ACTION.SET_NEXT_FORECAST:
      return {...state, nextForecast: action.payload};
    default:
      return state;
  }
}

export default forecastReducer;
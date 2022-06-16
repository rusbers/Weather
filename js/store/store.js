import { legacy_createStore as createStore} from 'redux';
import forecastReducer from './reducers/forecastReducer';
import favoriteCitiesReducer from './reducers/favoriteCitiesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  forecast: forecastReducer,
  favorites: favoriteCitiesReducer
});

const store = createStore(rootReducer);

export { store };


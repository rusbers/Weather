import { configureStore } from '@reduxjs/toolkit';
import forecastReducer from './reducers/forecastReducer';
import favoriteCitiesReducer from './reducers/favoriteCitiesReducer';

const store = configureStore({
  reducer: {
    forecast: forecastReducer,
    favorites: favoriteCitiesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export { store };
import { configureStore } from '@reduxjs/toolkit';
import {reducer as favoriteCitiesReducer} from './slices/favoriteCitiesSlice';
import {reducer as forecastReducer } from './slices/forecastSlice';

const store = configureStore({
  reducer: {
    forecast: forecastReducer,
    favorites: favoriteCitiesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export { store };
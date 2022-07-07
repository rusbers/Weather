import { createSlice } from "@reduxjs/toolkit";

const forecastSlice = createSlice({
  name: 'forecastSlice',
  initialState: {
    currentCity: '',
    currentForecast: {},
    nextForecast: [],
  },
  reducers: {
    setCurrentCity(state, action) {
      state.currentCity = action.payload;
    },
    setCurrentForecast(state, action) {
      state.currentForecast = action.payload;
    },
    setNextForecast(state, action) {
      state.nextForecast = action.payload;
    }
  }
})

const { actions, reducer } = forecastSlice;

export const { setCurrentCity, setCurrentForecast, setNextForecast } = actions;
export { reducer };

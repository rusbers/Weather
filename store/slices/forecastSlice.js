import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API, forecastRequest } from "../../network/network";
import { WeatherInfo } from "../../network/storage";

const fetchCurrentForecast = createAsyncThunk(
  'forecast/fetchCurrentWeather',
  async (cityName) => {
    try {
      const currentForecast = await forecastRequest(API.URL.WEATHER, cityName);

      return new WeatherInfo(currentForecast);
    } catch (errorMessage) {
      console.log(errorMessage);
    }
   }
);

const fetchFutureForecast = createAsyncThunk(
  'forecast/fetchFutureForecast',
  async (cityName) => {
    try {
      const futureForecast = await forecastRequest(API.URL.FORECAST, cityName);
      
      return futureForecast.list;
    } catch (error) {
      console.log(error);
    }
  }
)

const forecastSlice = createSlice({
  name: 'forecast',
  initialState: {
    currentCity: '',
    currentForecast: {},
    nextForecast: [],
  },
  reducers: {
    setCurrentCity(state, action) {
      state.currentCity = action.payload;
    }
  },
  extraReducers: {
    [fetchCurrentForecast.fulfilled]: (state, action) => {
      state.currentForecast = action.payload;
    },
    [fetchFutureForecast.fulfilled]: (state, action) => {
      state.nextForecast = action.payload;
    }
  }
})

const { actions, reducer } = forecastSlice;

export const { setCurrentCity } = actions;
export { fetchCurrentForecast, fetchFutureForecast };
export { reducer };

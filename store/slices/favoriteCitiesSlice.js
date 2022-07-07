import { createSlice } from "@reduxjs/toolkit";

const favoriteCitiesSlice = createSlice({
  name: 'favoriteCities',
  initialState: {
    favoriteCities: [],
  },
  reducers: {
    setFavoriteCities(state, action) {
      state.favoriteCities = action.payload;
    },
    addFavoriteCity(state, action) {
      state.favoriteCities.push(action.payload)
    },
    removeCityFromFavorites(state, action) {
      state.favoriteCities = state.favoriteCities.filter((favoriteCity) => favoriteCity !== action.payload)
    }
  }
})

const { actions, reducer } = favoriteCitiesSlice;

export const { setFavoriteCities, addFavoriteCity, removeCityFromFavorites } = actions;
export { reducer };

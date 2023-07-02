import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchedCity: [],
  weatherData: {},
};

export const userSearchSlice = createSlice({
  name: 'updateUserData',
  initialState,
  reducers: {
    updateSearchData: (state, action) => {
      let searchedCity = state.searchedCity;
      const city = action.payload?.city;
      if (searchedCity.includes(city)) {
        return;
      }
      state.searchedCity = [...searchedCity, action.payload?.city];
    },
    updateWeatherData: (state, action) => {
      let city = action.payload.city;
      let weatherdata = action.payload.weatherdata;
      state.weatherData = {};
      state.weatherData[city] = weatherdata;
    },
  },
});

export const { updateSearchData, updateWeatherData } = userSearchSlice.actions;

export default userSearchSlice.reducer;

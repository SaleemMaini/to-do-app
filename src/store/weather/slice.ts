import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getCurrentWeather, getFiveDaysWeather } from "./api";

export interface WeatherState {
  currentWeather: any;
  fiveDaysWeatherData: any;
  loadingGetData: boolean;
}

const initialState: WeatherState = {
  currentWeather: null,
  fiveDaysWeatherData: null,
  loadingGetData: true,
};

export const todosSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeather.pending, (state) => {
      state.loadingGetData = true;
    });
    builder.addCase(getFiveDaysWeather.pending, (state) => {
      state.loadingGetData = true;
    });
    builder.addCase(
      getCurrentWeather.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.currentWeather = action.payload;
        state.loadingGetData = false;
      }
    );
    builder.addCase(
      getFiveDaysWeather.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.fiveDaysWeatherData = action.payload;
        state.loadingGetData = false;
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const {} = todosSlice.actions;

export default todosSlice.reducer;

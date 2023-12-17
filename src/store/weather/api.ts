import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrentWeather = createAsyncThunk(
  "/weather/getCurrentWeather",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&units=metric`
    );

    return res.json();
  }
);

export const getFiveDaysWeather = createAsyncThunk(
  "/weather/getFiveDaysWeather",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&units=metric`
    );

    return res.json();
  }
);

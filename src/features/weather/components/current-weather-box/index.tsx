import { AppDispatch, RootState } from "@/store";
import { getCurrentWeather } from "@/store/weather/api";
import { Alert, Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CurrentWeatherBox = () => {
  // ** States
  const [errorGetPosition, setErrorGetPosition] = useState<boolean>(false);

  // ** Store
  const { currentWeather, loadingGetData } = useSelector(
    (state: RootState) => state.weather
  );

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>();

  // ** Handlers
  const successGetPosition = (position: any) => {
    dispatch(
      getCurrentWeather({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      })
    );
    setErrorGetPosition(false);
  };

  const handlerErrorGetPosition = (error: any) => {
    setErrorGetPosition(true);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      successGetPosition,
      handlerErrorGetPosition
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (errorGetPosition) {
    return (
      <Alert severity="error">
        <Typography variant="subtitle2">
          Error happened while get your position...
        </Typography>
      </Alert>
    );
  }

  return (
    <Box sx={{ px: 5 }}>
      <Box sx={{ p: 5, border: "1px solid #ccc", borderRadius: "5px" }}>
        {/* Loading */}
        {loadingGetData ? <p>Loading...</p> : null}

        {/* Weather */}
        {currentWeather && !loadingGetData ? (
          <Stack direction="row" spacing={1}>
            <Typography>Weather:</Typography>
            <Typography variant="subtitle2">
              {currentWeather.main.temp} °C
            </Typography>
          </Stack>
        ) : null}

        {/* Show More Link */}
        <Link href="/weather">More details..</Link>
      </Box>
    </Box>
  );
};

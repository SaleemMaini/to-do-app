import { AppDispatch, RootState } from "@/store";
import { Alert, Box, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getFiveDaysWeather } from "@/store/weather/api";
import Link from "next/link";

export const WeatherDetails = () => {
  // ** States
  const [errorGetPosition, setErrorGetPosition] = useState<boolean>(false);

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>();

  // ** Store
  const { fiveDaysWeatherData, loadingGetData } = useSelector(
    (state: RootState) => state.weather
  );

  // ** Handlers
  const successGetPosition = (position: any) => {
    dispatch(
      getFiveDaysWeather({
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
    <Box sx={{ p: 5 }}>
      <Link href="/">Back</Link>

      <Box
        sx={{ mt: 2, p: 2.5, border: "1px solid #ccc", borderRadius: "5px" }}
      >
        {loadingGetData ? <Typography>Loading..</Typography> : null}

        {fiveDaysWeatherData && !loadingGetData
          ? fiveDaysWeatherData.list.map((day: any, idx: any) => {
              return (
                <Stack direction="row" spacing={1} key={idx}>
                  <Typography>
                    {new Date(day.dt_txt).toLocaleString("en-us", {
                      weekday: "long",
                      hour: "numeric",
                    })}
                  </Typography>
                  :
                  <Typography variant="subtitle2">
                    {day.main.temp} °C
                  </Typography>
                </Stack>
              );
            })
          : null}
      </Box>
    </Box>
  );
};

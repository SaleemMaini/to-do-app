import { configureStore } from "@reduxjs/toolkit";
import todos from "./todos/slice";
import weather from "./weather/slice";

export const store = configureStore({
  reducer: { todos, weather },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

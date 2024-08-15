import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./WeatherApi";

const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

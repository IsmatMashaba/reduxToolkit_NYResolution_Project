import { configureStore } from "@reduxjs/toolkit";
import resolutionReducer from "./slice/resolution";
import favouriteReducer from './slice/favouriteResolution'


const store = configureStore({
    reducer : {resolution : resolutionReducer, favorite: favouriteReducer},
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>;

export default store;


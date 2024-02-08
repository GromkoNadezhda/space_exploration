import { configureStore } from "@reduxjs/toolkit";
import astronomyPicturesReducer from "@store/astronomyPicturesSlice";
import appSettingsReducer from "@store/appSettings";

export const store = configureStore({
  reducer: {
    astronomyPictures: astronomyPicturesReducer,
    appSettings: appSettingsReducer,
  },
});

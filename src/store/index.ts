import { configureStore } from "@reduxjs/toolkit";
import astronomyPicturesReducer from "@store/astronomyPicturesSlice";

export const store = configureStore({
  reducer: {
    astronomyPictures: astronomyPicturesReducer,
  },
});

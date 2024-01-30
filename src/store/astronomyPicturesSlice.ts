import { createSlice } from "@reduxjs/toolkit";
import { fetchAstronomyPicture } from "./thunk";
import { ISTORE } from "../types/types";
import { act } from "react-dom/test-utils";

const INITIAL_STATE: ISTORE = {
  astronomyPictures: [],
  astronomyPicture: null,
  loadingStatus: false,
  error: null,
};
const astronomyPicturesSlice = createSlice({
  name: "astronomyPictures",
  initialState: {
    astronomyPictures: INITIAL_STATE.astronomyPictures,
    astronomyPicture: null,
    loadingStatus: INITIAL_STATE.loadingStatus,
    error: INITIAL_STATE.error,
  },
  reducers: {
    addAstronomyPictures(state, action) {
      state.astronomyPictures = action.payload;
    },
    addAstronomyPicture(state, action) {
      state.astronomyPicture = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAstronomyPicture.fulfilled, (state, action) => {
      (state.loadingStatus = false), (state.error = null);

      if (Array.isArray(action.payload)) {
        state.astronomyPictures = action.payload;
        
      } else if (!Array.isArray(action.payload)) {
        state.astronomyPicture = action.payload;
      }
    });
    builder.addCase(fetchAstronomyPicture.pending, (state) => {
      state.loadingStatus = true;
      state.error = null;
    });

    builder.addCase(fetchAstronomyPicture.rejected, (state, action) => {
      state.loadingStatus = false;
      state.error = action.error;
    });
  },
});

export const { addAstronomyPictures, addAstronomyPicture } =
  astronomyPicturesSlice.actions;
export default astronomyPicturesSlice.reducer;

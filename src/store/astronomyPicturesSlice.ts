import { createSlice } from "@reduxjs/toolkit";
import { fetchAstronomyPicture } from "./thunk";
import { IASTRONOMY_PICTURE, TFILTERING_VALUES } from "../types/types";
import { RENDERING_ASTRONOMY_PICTURES_BUTTON } from "../constants/constants";

const INITIAL_STATE: {
  astronomyPictures: IASTRONOMY_PICTURE[];
  astronomyPicture: IASTRONOMY_PICTURE | null;
  filteringValues: TFILTERING_VALUES | null;
  sortingType: number;
  loadingStatus: boolean;
  error: {} | null;
} = {
  astronomyPictures: [],
  astronomyPicture: null,
  filteringValues: null,
  sortingType: 0,
  loadingStatus: false,
  error: null,
};

const astronomyPicturesSlice = createSlice({
  name: "astronomyPictures",
  initialState: {
    astronomyPictures: INITIAL_STATE.astronomyPictures,
    astronomyPicturesToShow: INITIAL_STATE.astronomyPictures,
    astronomyPicture: INITIAL_STATE.astronomyPicture,
    filteringValues: INITIAL_STATE.filteringValues,
    sortingType: INITIAL_STATE.sortingType,
    loadingStatus: INITIAL_STATE.loadingStatus,
    error: INITIAL_STATE.error,
  },

  reducers: {
    addAstronomyPictures(
      state,
      action: {
        type: string;
        payload: {
          astronomyPictures: IASTRONOMY_PICTURE[];
          content: { content: string; id: string };
        };
      }
    ) {
      if (
        action.payload.content.id ===
        RENDERING_ASTRONOMY_PICTURES_BUTTON.show.id
      ) {
        state.astronomyPicturesToShow = state.astronomyPictures;
      } else
        state.astronomyPicturesToShow = action.payload.astronomyPictures.filter(
          (_, index) => index < 9
        );
    },
    addAstronomyPicture(state, action) {
      state.astronomyPicture = action.payload;
    },
    addFilteringValues(state, action) {
      state.filteringValues = action.payload;
    },
    addSortingType(state, action) {
      state.sortingType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAstronomyPicture.pending, (state) => {
      state.loadingStatus = true;
      state.error = null;
    });
    builder.addCase(fetchAstronomyPicture.fulfilled, (state, action) => {
      (state.loadingStatus = false), (state.error = null);

      if (Array.isArray(action.payload)) {
        state.astronomyPictures = action.payload;
        state.astronomyPicturesToShow = action.payload.filter(
          (_, index) => index < 9
        );
      } else if (!Array.isArray(action.payload)) {
        state.astronomyPicture = action.payload;
      }
    });
    builder.addCase(fetchAstronomyPicture.rejected, (state, action) => {
      state.loadingStatus = false;
      state.error = action.error;
    });
  },
});

export const {
  addAstronomyPictures,
  addAstronomyPicture,
  addFilteringValues,
  addSortingType,
} = astronomyPicturesSlice.actions;
export default astronomyPicturesSlice.reducer;

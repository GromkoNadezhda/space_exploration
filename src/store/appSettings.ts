import { BASIC_BLOCKS_ID, HEADER_CONTENT } from "@constants/constants";
import { createSlice } from "@reduxjs/toolkit";
import { IHEADER_CONTENT } from "@types";

const INITIAL_STATE: {
  headerContent: IHEADER_CONTENT;
} = {
  headerContent: HEADER_CONTENT[BASIC_BLOCKS_ID.allAstronomyPictures],
};
const appSettings = createSlice({
  name: "appSettings",
  initialState: {
    headerContent: INITIAL_STATE.headerContent,
  },
  reducers: {
    updateHeaderContent(state, action) {
      state.headerContent = HEADER_CONTENT[action.payload as BASIC_BLOCKS_ID];
    },
  },
});

export const { updateHeaderContent } = appSettings.actions;
export default appSettings.reducer;

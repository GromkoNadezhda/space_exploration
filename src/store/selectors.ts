import { createSelector } from "@reduxjs/toolkit";
import {
  filteredAstronomyPictures,
  sortAstronomyPictures,
} from "@store/helpers";
import { IHEADER_CONTENT, ISTORE } from "@types";

const selectAllAstronomyPictures = (state: ISTORE) =>
  state.astronomyPictures.astronomyPicturesToShow;

export const selectAstronomyPicture = (state: ISTORE) =>
  state.astronomyPictures.astronomyPicture;

export const selectActiveFilter = (state: ISTORE) =>
  state.astronomyPictures.filteringValues;

export const selectSortingType = (state: ISTORE) =>
  state.astronomyPictures.sortingType;

export const selectLoadingStatus = (state: ISTORE) =>
  state.astronomyPictures.loadingStatus;

export const selectHeaderContent = (state: {
  appSettings: { headerContent: IHEADER_CONTENT };
}) => state.appSettings.headerContent;

export const selectAstronomyPicturesByFilter = createSelector(
  [selectActiveFilter, selectAllAstronomyPictures],

  (activeFilter, allAstronomyPictures) => {
   return activeFilter
      ? filteredAstronomyPictures(activeFilter, allAstronomyPictures)
      : allAstronomyPictures;
  }
);

export const sortedAstronomyPictures = createSelector(
  [selectAstronomyPicturesByFilter, selectSortingType],
  (astronomyPictures, selectSortingType) =>
    sortAstronomyPictures(astronomyPictures, selectSortingType)
);

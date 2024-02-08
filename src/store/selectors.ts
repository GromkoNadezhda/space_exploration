import { createSelector } from "@reduxjs/toolkit";
import { filteredAstronomyPictures, sortAstronomyPictures } from "@store/helpers";
import { ISTORE } from "@types";

const selectAllAstronomyPictures = (state: ISTORE) =>
  state.astronomyPictures.astronomyPicturesToShow;

export const selectActiveFilter = (state: ISTORE) =>
  state.astronomyPictures.filteringValues;

export const selectSortingType = (state: ISTORE) =>
  state.astronomyPictures.sortingType;

export const selectAstronomyPicturesByFilter = createSelector(
  [selectActiveFilter, selectAllAstronomyPictures],

  (activeFilter, allAstronomyPictures) => {
    if (activeFilter) {
      return filteredAstronomyPictures(activeFilter, allAstronomyPictures);
    } else return allAstronomyPictures;
  }
);

export const sortedAstronomyPictures = createSelector(
  [selectAstronomyPicturesByFilter, selectSortingType],
  (astronomyPictures, selectSortingType) =>
    sortAstronomyPictures(astronomyPictures, selectSortingType)
);

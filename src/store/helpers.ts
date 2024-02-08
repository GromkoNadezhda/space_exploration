import { IASTRONOMY_PICTURE, IFILTERING_VALUES } from "@types";

export const filteredAstronomyPictures = (
  filteringValues: IFILTERING_VALUES,
  astronomyPictures: IASTRONOMY_PICTURE[]
) => {
  const { Date, Title } = filteringValues;

  if (!Date && !Title) return astronomyPictures;

  return astronomyPictures.filter(
    (astronomyPicture) =>
      astronomyPicture.date.includes(Date) ||
      astronomyPicture.title.includes(Title)
  );
};

export const sortAstronomyPictures = (
  astronomyPictures: IASTRONOMY_PICTURE[],
  sort: number
) => {
  const sortedAstronomyPictures = [...astronomyPictures];

  if (!!sort) astronomyPictures;

  return sortedAstronomyPictures.sort(
    (a: IASTRONOMY_PICTURE, b: IASTRONOMY_PICTURE) => {
      if (a.date > b.date) return -sort;

      if (a.date < b.date) return sort;

      return 0;
    }
  );
};

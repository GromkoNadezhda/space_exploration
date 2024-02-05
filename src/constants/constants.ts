export enum BASIC_BLOCKS_ID {
  allAstronomyPictures = "allAstronomyPictures",
  astronomyPicture = "astronomyPicture",
}

export const BASIC_BLOCKS_ID_LIST = Object.values(BASIC_BLOCKS_ID);

export const HeaderContent = {
  [BASIC_BLOCKS_ID.allAstronomyPictures]: {
    id: "primary",
    title: "Astronomy Picture of the Day Archive",
    mainPart:
      "This archive list links to previous daily APOD pages from the current date through January 1, 2024.",
  },
  [BASIC_BLOCKS_ID.astronomyPicture]: {
    id: "secondary",
    title: "Astronomy Picture of the Day",
    mainPart:
      "Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.",
  },
  otherPages: { id: "others", title: "", mainPart: "" },
};

export enum BUTTON_THEME {
  active = "filtration__button-active",
  unactive = "filtration__button",
}

export enum FILTRATION_TITLE {
  DATE = "Date",
  TITLE = "Title",
}

export const FILTRATION_TITLE_LIST = Object.values(FILTRATION_TITLE);

export const RENDERING_ASTRONOMY_PICTURES_BUTTON = {
  show: { content: "Show more", id: "show" },
  hidden: { content: "Show only nine days", id: "hidden" },
};

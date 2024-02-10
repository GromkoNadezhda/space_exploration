export enum BASIC_BLOCKS_ID {
  allAstronomyPictures = "allAstronomyPictures",
  astronomyPicture = "astronomyPicture",
  otherPages = "otherPages",
}

export const HEADER_CONTENT = {
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
  [BASIC_BLOCKS_ID.otherPages]: { id: "others", title: "", mainPart: "" },
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

export const INPUT_DATA = {
  [FILTRATION_TITLE.DATE]: {
    id: "Date",
    min: "2024-01-01",
    type: "date",
  },
  [FILTRATION_TITLE.TITLE]: {
    id: "Title",
    min: undefined,
    type: "text",
  },
};

export const INPUT_DATA_LIST = Object.values(INPUT_DATA);

export enum RENDERING_ASTRONOMY_PICTURES_BUTTON {
  SHOW_ALL = "Show more",
  SHOW_MIN = "Show only nine days",
}

export enum ITEMS_COUNT {
  MIN_ITEMS_COUNT = -9,
}

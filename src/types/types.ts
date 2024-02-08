import { FILTRATION_TITLE } from "../constants/constants";

export interface IASTRONOMY_PICTURE {
  date: string;
  explanation: string;
  title: string;
  url: string;
}

export interface IFILTERING_VALUES {
  [FILTRATION_TITLE.DATE]: string;
  [FILTRATION_TITLE.TITLE]: string;
}

export interface ISTORE {
  astronomyPictures: {
    astronomyPictures: IASTRONOMY_PICTURE[];
    astronomyPicturesToShow: IASTRONOMY_PICTURE[];
    astronomyPicture: IASTRONOMY_PICTURE;
    filteringValues: IFILTERING_VALUES;
    sortingType: number;
    loadingStatus: boolean;
    error: {};
  };
}

export interface IHEADER_CONTENT {
  id: string;
  title: string;
  mainPart: string;
}

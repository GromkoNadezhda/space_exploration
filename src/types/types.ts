import { FILTRATION_TITLE } from "../constants/constants";

export interface IASTRONOMY_PICTURE {
  date: string;
  explanation: string;
  title: string;
  url: string;
}

export interface TFILTERING_VALUES {
  [FILTRATION_TITLE.DATE]: string;
  [FILTRATION_TITLE.TITLE]: string;
}

export interface ISTORE {
  astronomyPictures: {
    astronomyPictures: IASTRONOMY_PICTURE[];
    astronomyPicturesToShow: IASTRONOMY_PICTURE[];
    astronomyPicture: IASTRONOMY_PICTURE;
    filteringValues: TFILTERING_VALUES;
    sortingType: number;
    loadingStatus: boolean;
    error: {};
  };
}

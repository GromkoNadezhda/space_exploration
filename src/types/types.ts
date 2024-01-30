export interface IASTRONOMY_PICTURE {
  date: string;
  explanation: string;
  title: string;
  url: string;
}

export interface ISTORE {
  astronomyPictures: IASTRONOMY_PICTURE[];
  astronomyPicture:null | IASTRONOMY_PICTURE;
  loadingStatus: boolean;
  error: null | {};
}

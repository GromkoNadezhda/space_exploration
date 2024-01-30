import { configureStore } from "@reduxjs/toolkit";
import astronomyPicturesReducer  from "./astronomyPicturesSlice";


export const store= configureStore({
    reducer:{
        astronomyPictures:astronomyPicturesReducer
    }
})
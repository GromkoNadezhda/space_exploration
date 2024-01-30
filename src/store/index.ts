import { configureStore } from "@reduxjs/toolkit";
import astronomyPictureReducer  from "./astronomyPictureSlice";


export const store= configureStore({
    reducer:{
        astronomyPicture:astronomyPictureReducer
    }
})
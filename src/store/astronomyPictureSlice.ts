import { createSlice } from "@reduxjs/toolkit";
import { fetchAstronomyPicture } from "./thunk";
import { ASTRONOMY_PICTURE } from "../types/types";

const INITIAL_STATE:{astronomyPicture:ASTRONOMY_PICTURE[], loadingStatus:boolean, error:null|{}}={
    astronomyPicture:[], 
    loadingStatus:false, 
    error:null
}
const astronomyPictureSlice=createSlice({
    name:'astronomyPicture', 
    initialState:{
        astronomyPicture:INITIAL_STATE.astronomyPicture, 
        loadingStatus:INITIAL_STATE.loadingStatus, 
        error:INITIAL_STATE.error
    }, 
    reducers:{
        addGames(state, action){
            state.astronomyPicture=action.payload
        }
    }, 
    extraReducers:(builder)=>{
        builder.addCase(fetchAstronomyPicture.fulfilled, (state, action)=>{
            state.astronomyPicture=action.payload
            state.loadingStatus=false, 
            state.error=null
        })
        builder.addCase(fetchAstronomyPicture.pending, (state)=>{
            state.loadingStatus=true
            state.error=null
        })
       
        builder.addCase(fetchAstronomyPicture.rejected, (state, action)=>{
            state.loadingStatus=false
            state.error=action.error
        })
    }
})

export const {addGames}=astronomyPictureSlice.actions
export default astronomyPictureSlice.reducer;


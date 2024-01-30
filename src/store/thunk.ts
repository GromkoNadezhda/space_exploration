import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
  
  const SET_GAMES="games/fetchGames"

export const fetchAstronomyPicture = createAsyncThunk(
    SET_GAMES,
 async (apiUrl:string)=>{
    // const apiUrl='../games.json'
    try {

        const {data} =await axios.get(apiUrl)
        console.log(data);
        
       return data
    } catch (error){
        console.log(error);
        
        // return rejectedWithValue(error.message)
    }
  }
);


import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SET_ASTRONOMY_PICTURE = "games/fetchAstronomyPicture";

export const fetchAstronomyPicture = createAsyncThunk(
  SET_ASTRONOMY_PICTURE,
  async (apiUrl: string, {rejectWithValue}) => {
    try {
      const { data } = await axios.get(apiUrl);

      return data;
    } catch (error:any) {
         return rejectWithValue(error.message)
    }
  }
);

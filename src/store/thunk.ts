import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SET_ASTRONOMY_PICTURE = "games/fetchAstronomyPicture";

export const fetchAstronomyPicture = createAsyncThunk(
  SET_ASTRONOMY_PICTURE,
  async (apiUrl: string) => {
    try {
      const { data } = await axios.get(apiUrl);

      return data;
    } catch (error) {
      console.log(error);

      // return rejectedWithValue(error.message)
    }
  }
);

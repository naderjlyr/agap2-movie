import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchShows, singleSearchShow } from "../../services/tvMazeService";
import { Episode, Show } from "../../types/types";
import axios from "axios";
import { RootState } from "../store";

interface TvShowsState {
  shows: Show[];
  show: Show | null;
  episodes: Episode[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TvShowsState = {
  shows: [],
  show: null,
  episodes: [],
  status: "idle",
  error: null,
};

export const fetchShows = createAsyncThunk<Show[], string>(
  "tvShows/fetchShows",
  async (query: string, { rejectWithValue }) => {
    try {
      return await searchShows(query);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue({
          message: error.message,
          status: error.response.status,
        });
      }
      return rejectWithValue({
        message: axios.isAxiosError(error)
          ? error.message
          : "An unknown error occurred",
        status:
          axios.isAxiosError(error) && error.response
            ? error.response.status
            : null,
      });
    }
  },
);

export const fetchSingleShow = createAsyncThunk(
  "tvShows/fetchSingleShow",
  async (query: string, { rejectWithValue }) => {
    try {
      return await singleSearchShow(query);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShows.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShows.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shows = action.payload;
      })
      .addCase(fetchShows.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});
export const selectTvShows = (state: RootState) => state.tvShows.shows;
export default tvShowsSlice.reducer;

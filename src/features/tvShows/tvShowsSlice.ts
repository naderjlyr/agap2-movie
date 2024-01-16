import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { Show, Episode, ShowSearchResult } from "../../types/types";

const API_URL = process.env.REACT_APP_API_URL || "https://api.tvmaze.com/";

interface TvShowsState {
  shows: ShowSearchResult[];
  selectedShow: Show | null;
  episodes: Episode[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TvShowsState = {
  shows: [],
  selectedShow: null,
  episodes: [],
  status: "idle",
  error: null,
};

export const fetchShows = createAsyncThunk<ShowSearchResult[], string>(
  "tvShows/fetchShows",
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}search/shows?q=${query}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue({
          message: error.message,
          status: error.response.status,
        });
      }
      return rejectWithValue({
        message: "An unknown error occurred",
        status: null,
      });
    }
  },
);

export const fetchSingleShow = createAsyncThunk<Show, string>(
  "tvShows/fetchSingleShow",
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}singlesearch/shows?q=${query}`,
      );
      return response.data;
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
        state.error = action.error?.message || "Failed to fetch shows";
      })
      .addCase(fetchSingleShow.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleShow.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedShow = action.payload;
      })
      .addCase(fetchSingleShow.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message || "Failed to fetch single show";
      });
  },
});

export const selectTvShows = (state: RootState) => state.tvShows.shows;
export const selectSelectedShow = (state: RootState) =>
  state.tvShows.selectedShow;

export default tvShowsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { Show, ShowSearchResult } from "../../types/types";
import { stripHtml } from "string-strip-html";

const API_URL = process.env.REACT_APP_API_URL || "https://api.tvmaze.com/";

export const searchShows = createAsyncThunk<ShowSearchResult[], string>(
  "tvShows/searchShows",
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}search/shows?q=${query}`);
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to search shows");
    }
  },
);

export const fetchSingleShow = createAsyncThunk<Show, number>(
  "tvShows/fetchSingleShow",
  async (showId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}shows/${showId}?embed[]=seasons&embed[]=episodes`,
      );
      const showData: Show = response.data;
      showData.summary = showData.summary
        ? stripHtml(showData.summary).result
        : "";
      return showData;
    } catch (error) {
      return rejectWithValue("Failed to fetch show details");
    }
  },
);

interface TvShowsState {
  searchResults: ShowSearchResult[];
  selectedShow: Show | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  isDarkMode: boolean;
}

const initialState: TvShowsState = {
  searchResults: [],
  selectedShow: null,
  status: "idle",
  error: null,
  isDarkMode: false,
};

export const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchShows.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchShows.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchResults = action.payload;
      })
      .addCase(searchShows.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
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
        state.error = action.payload as string;
      });
  },
});

export const { toggleDarkMode } = tvShowsSlice.actions;

export const selectSearchResults = (state: RootState) =>
  state.tvShows.searchResults;
export const selectSelectedShow = (state: RootState) =>
  state.tvShows.selectedShow;
export const selectTvShowsError = (state: RootState) => state.tvShows.error;
export const selectTvShowsStatus = (state: RootState) => state.tvShows.status;

export default tvShowsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Show, ShowSearchResult } from "../../types/types";
import { tvMazeService } from "../../services/tvMazeService";

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
  isDarkMode: JSON.parse(localStorage.getItem("isDarkMode") || "false"),
};
export const searchShows = createAsyncThunk<ShowSearchResult[], string>(
  "tvShows/searchShows",
  async (query, { rejectWithValue }) => {
    try {
      return await tvMazeService.searchShows(query);
    } catch (error) {
      return rejectWithValue("Failed to search shows");
    }
  },
);

export const fetchSingleShow = createAsyncThunk<Show, number>(
  "tvShows/fetchSingleShow",
  async (showId, { rejectWithValue }) => {
    try {
      return await tvMazeService.getShowDetails(showId);
    } catch (error) {
      return rejectWithValue("Failed to fetch show details");
    }
  },
);

export const fetchPopularShows = createAsyncThunk<Show[]>(
  "tvShows/fetchPopularShows",
  async (_, { rejectWithValue }) => {
    try {
      return await tvMazeService.getPopularShows();
    } catch (error) {
      return rejectWithValue("Failed to fetch popular shows");
    }
  },
);

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

export const selectSelectedShow = (state: RootState) =>
  state.tvShows.selectedShow;
export const selectTvShowsError = (state: RootState) => state.tvShows.error;
export const selectTvShowsStatus = (state: RootState) => state.tvShows.status;

export default tvShowsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { RootState } from "../store";
import { Show, Episode, ShowSearchResult } from "../../types/types";
import { getShowDetails, searchShows } from "../../services/tvMazeService";

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
      return await searchShows(query);
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
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
      return await getShowDetails(query);
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
        if (Array.isArray(action.payload)) {
          state.shows = action.payload;
        } else {
          state.error = "Invalid data format received";
        }
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

export const selectTvShowsError = (state: RootState) => state.tvShows.error;

export const selectTvShowsSearchStatus = (state: RootState) =>
  state.tvShows.status;

export default tvShowsSlice.reducer;

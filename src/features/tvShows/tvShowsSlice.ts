import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { RootState } from "../store";
import { Show, Episode, ShowSearchResult } from "../../types/types";
import {
  fetchTvShowBackgroundImageUrl,
  getShowDetails,
  searchShows,
} from "../../services/tvMazeService";

interface TvShowsState {
  shows: ShowSearchResult[];
  selectedShow: Show | null;
  episodes: Episode[];
  backgroundImages: Record<number, string | undefined>;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  isDarkMode: boolean;
}

const initialState: TvShowsState = {
  shows: [],
  selectedShow: null,
  episodes: [],
  backgroundImages: {},
  status: "idle",
  error: null,
  isDarkMode: false,
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

export const fetchSingleShow = createAsyncThunk<Show, string | number>(
  "tvShows/fetchSingleShow",
  async (showIdentifier, { rejectWithValue }) => {
    try {
      let showDetails;
      if (typeof showIdentifier === "number") {
        showDetails = await getShowDetails(showIdentifier);
      } else {
        const searchResults = await searchShows(showIdentifier);
        if (searchResults.length === 0) throw new Error("No shows found");
        showDetails = searchResults[0].show;
      }
      const backgroundImageUrl = await fetchTvShowBackgroundImageUrl(
        showDetails.id,
      );
      return { ...showDetails, backgroundImageUrl };
    } catch (error) {
      console.error("Error fetching show details or background image:", error);
      return rejectWithValue(error);
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

import { combineReducers } from "@reduxjs/toolkit";
import tvShowsReducer from "../features/tvShows/tvShowsSlice";
import episodesReducer from "../features/episodes/episodesSlice";

const rootReducer = combineReducers({
  tvShows: tvShowsReducer,
  episodes: episodesReducer,
});

export default rootReducer;

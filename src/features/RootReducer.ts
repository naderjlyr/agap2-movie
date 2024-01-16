import { combineReducers } from "@reduxjs/toolkit";
import tvShowsReducer from "../features/tvShows/tvShowsSlice";

const rootReducer = combineReducers({
  tvShows: tvShowsReducer,
});

export default rootReducer;

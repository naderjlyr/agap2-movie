import { useEffect } from "react";
import {
  fetchSingleShow,
  selectSelectedShow,
} from "../features/tvShows/tvShowsSlice";
import { useAppDispatch, useAppSelector } from "../features/store";

const useTvShows = (showId?: number) => {
  const selectedShow = useAppSelector(selectSelectedShow);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (showId !== undefined) {
      dispatch(fetchSingleShow(showId));
    }
  }, [showId, dispatch]);

  return { selectedShow };
};

export default useTvShows;

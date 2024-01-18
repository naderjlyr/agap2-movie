import { useEffect } from "react";
import {
  fetchSingleShow,
  selectSelectedShow,
} from "../features/tvShows/tvShowsSlice";
import { useAppSelector } from "../features/useAppSelector";
import { useAppDispatch } from "../features/useAppDispatch";

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

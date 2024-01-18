import { useEffect } from "react";
import { useAppSelector } from "../features/useAppSelector";
import {
  fetchSingleShow,
  selectSelectedShow,
} from "../features/tvShows/tvShowsSlice";
import { useAppDispatch } from "../features/useAppDispatch";

const useTvShows = () => {
  const selectedShow = useAppSelector(selectSelectedShow);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSingleShow(1955));
  }, [dispatch]);

  return {
    selectedShow,
  };
};

export default useTvShows;

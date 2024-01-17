import { useEffect, useMemo } from "react";
import {
  fetchSingleShow,
  selectSelectedShow,
  selectTvShows,
  selectTvShowsError,
  selectTvShowsSearchStatus,
} from "../features/tvShows/tvShowsSlice";
import { useAppDispatch } from "../features/useAppDispatch";
import { useAppSelector } from "../features/useAppSelector";

const useTvShows = (showIdentifier: string | number) => {
  const dispatch = useAppDispatch();

  const shows = useAppSelector(selectTvShows);
  const selectedShow = useAppSelector(selectSelectedShow);

  const error = useAppSelector(selectTvShowsError);
  const status = useAppSelector(selectTvShowsSearchStatus);

  useEffect(() => {
    dispatch(fetchSingleShow(showIdentifier));
  }, [dispatch, showIdentifier]);

  const highestScoredShow = useMemo(() => {
    return shows.length > 0
      ? shows.reduce((prev, current) =>
          prev.score > current.score ? prev : current,
        ).show
      : null;
  }, [shows]);

  const episodes = useMemo(
    () => selectedShow?._embedded?.episodes || [],
    [selectedShow?._embedded?.episodes],
  );

  return {
    shows,
    selectedShow: highestScoredShow || selectedShow,
    episodes,
    error,
    status,
  };
};

export default useTvShows;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShows, selectTvShows } from "./features/tvShows/tvShowsSlice";
import ShowCard from "./features/tvShows/components/ShowCard";
import SeasonCard from "./features/tvShows/components/SeasonCard";
import { AppDispatch, RootState } from "./features/store";
import { Episode } from "./types/types";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const shows = useSelector(selectTvShows);
  const status = useSelector((state: RootState) => state.tvShows.status);

  useEffect(() => {
    dispatch(fetchShows("Powerpuff Girls"));
  }, [dispatch]);

  if (status === "loading")
    return <div className="text-center py-10">Loading...</div>;
  if (status === "failed")
    return (
      <div className="text-center py-10 text-red-500">Failed to load shows</div>
    );

  return (
    <div className="container mx-auto py-8 px-4">
      {shows.map((showResult) => (
        <div key={showResult.show.id}>
          <ShowCard show={showResult.show} />
          {showResult.show._embedded?.episodes &&
            renderSeasons(showResult.show._embedded.episodes)}
        </div>
      ))}
    </div>
  );
};

function renderSeasons(episodes: Episode[]) {
  const seasons = [...new Set(episodes.map((e) => e.season))];
  return seasons.map((seasonNumber) => (
    <SeasonCard
      key={seasonNumber}
      seasonNumber={seasonNumber}
      episodes={episodes.filter((e) => e.season === seasonNumber)}
    />
  ));
}

export default App;

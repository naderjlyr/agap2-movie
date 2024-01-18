import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "../../features/useAppDispatch";
import { fetchSingleShow } from "../../features/tvShows/tvShowsSlice";
import EpisodeDetailCard from "../../features/tvShows/components/EpisodeDetailCard";
import { useAppSelector } from "../../features/useAppSelector";

const EpisodeDetailsPage = () => {
  const { id, episodeId } = useParams<{ id: string; episodeId: string }>();
  const dispatch = useAppDispatch();
  const selectedShow = useAppSelector((state) => state.tvShows.selectedShow);

  useEffect(() => {
    if (id && !selectedShow) {
      dispatch(fetchSingleShow(Number(id)));
    }
  }, [id, selectedShow, dispatch]);

  const episodeIdNum = Number(episodeId);
  const episode = selectedShow?._embedded.episodes?.find(
    (episode) => episode.id === episodeIdNum,
  );

  return episode ? (
    <EpisodeDetailCard episode={episode} />
  ) : (
    <div>Episode not found.</div>
  );
};

export default EpisodeDetailsPage;

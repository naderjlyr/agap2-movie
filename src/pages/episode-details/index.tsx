import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchSingleShow } from "../../features/tvShows/tvShowsSlice";
import EpisodeDetailCard from "../../features/tvShows/components/Episodes/EpisodeDetailCard";
import RelatedEpisodes from "../../features/tvShows/components/Episodes/RelatedEpisodes";
import { useAppDispatch, useAppSelector } from "../../features/store";

const EpisodeDetailsPage = () => {
  const { id, episodeId } = useParams<{ id: string; episodeId: string }>();
  const dispatch = useAppDispatch();
  const selectedShow = useAppSelector((state) => state.tvShows.selectedShow);
  const episodeIdNum = Number(episodeId);

  useEffect(() => {
    if (id && (!selectedShow || selectedShow.id !== parseInt(id))) {
      dispatch(fetchSingleShow(Number(id)));
    }
  }, [id, selectedShow, dispatch]);

  const episode = selectedShow?._embedded.episodes?.find(
    (ep) => ep.id === episodeIdNum,
  );

  return episode ? (
    <div className="bg-gray-800 p-5 dark:bg-white">
      <EpisodeDetailCard episode={episode} />

      <RelatedEpisodes title={`Other Episodes from Season ${episode.season}`} />
    </div>
  ) : (
    <div>Episode not found.</div>
  );
};

export default EpisodeDetailsPage;

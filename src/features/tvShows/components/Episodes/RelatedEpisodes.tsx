import React, { FC } from "react";
import { useParams } from "react-router-dom";
import EpisodeCard from "./EpisodeCard";
import { useAppSelector } from "../../../store";

interface RelatedEpisodesProps {
  title: string;
}

const RelatedEpisodes: FC<RelatedEpisodesProps> = ({ title }) => {
  const { episodeId } = useParams<{ id: string; episodeId: string }>();
  const selectedShow = useAppSelector((state) => state.tvShows.selectedShow);
  const currentEpisodeId = parseInt(episodeId || "0", 10);

  const currentEpisode = selectedShow?._embedded.episodes.find(
    (ep) => ep.id === currentEpisodeId,
  );
  const currentSeasonNumber = currentEpisode?.season;

  const relatedEpisodes = selectedShow?._embedded.episodes.filter(
    (ep) => ep.id !== currentEpisodeId && ep.season === currentSeasonNumber,
  );

  return (
    <div className="my-8">
      <h3 className="text-2xl text-gray-400 dark:text-gray-700 font-bold mb-4">
        {title}
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedEpisodes?.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} compact />
        ))}
      </div>
    </div>
  );
};

export default RelatedEpisodes;

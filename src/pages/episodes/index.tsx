import React from "react";
import { useParams } from "react-router-dom";
import EpisodeCard from "../../features/tvShows/components/EpisodeCard";
import useTvShows from "../../hooks/useTvShows";

const EpisodesPage = () => {
  const { id } = useParams<{ id: string }>();
  const showId = parseInt(id!, 10);
  const { selectedShow } = useTvShows(showId);

  if (!selectedShow) {
    return <div className="text-center">Loading show data...</div>;
  }

  if (!selectedShow._embedded.episodes) {
    return <div className="text-center">No episodes found</div>;
  }
  const selectedShowName = selectedShow.name;

  return (
    <div className="bg-gray-950 p-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 md:mb-12 text-pink-900">
          {selectedShowName} Episodes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedShow._embedded.episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} compact={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpisodesPage;

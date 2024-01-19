import React from "react";
import { useParams } from "react-router-dom";
import EpisodeCard from "../../features/tvShows/components/Episodes/EpisodeCard";
import useTvShows from "../../hooks/useTvShows";
import { groupEpisodesBySeason } from "../../utils";
import { useSpring, animated } from "react-spring";

const EpisodesPage = () => {
  const { id } = useParams<{ id: string }>();
  const showId = parseInt(id!, 10);
  const { selectedShow } = useTvShows(showId);

  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  if (!selectedShow) {
    return <div className="text-center">Loading show data...</div>;
  }

  if (!selectedShow._embedded.episodes) {
    return <div className="text-center">No episodes found</div>;
  }
  const selectedShowName = selectedShow.name;

  const episodesBySeason = groupEpisodesBySeason(
    selectedShow._embedded.episodes,
  );

  return (
    <animated.div style={fade} className="bg-gray-950 p-20 dark:bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 md:mb-12 text-pink-900">
          {selectedShowName} Episodes
        </h2>
        {Object.entries(episodesBySeason).map(([seasonNumber, episodes]) => (
          <div key={seasonNumber}>
            <h3 className="text-2xl text-white dark:text-gray-500 font-bold my-4">
              Season {seasonNumber}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6">
              {episodes.map((episode) => (
                <EpisodeCard
                  key={episode.id}
                  episode={episode}
                  compact={false}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default EpisodesPage;

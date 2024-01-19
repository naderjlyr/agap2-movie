import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Episode } from "../../../../types/types";
import EpisodeCard from "../Episodes/EpisodeCard";
import { useAppSelector } from "../../../store";
type SeasonCardProps = {
  compact?: boolean;
};
const MAX_COMPACT_EPISODES = 3;

const getEpisodesBySeason = (
  episodes: Episode[],
  seasonNumber: number,
  isCompact: boolean,
): Episode[] => {
  const filteredEpisodes = episodes.filter(
    (episode) => episode.season === seasonNumber,
  );
  return isCompact ? filteredEpisodes.slice(0, 3) : filteredEpisodes;
};

const SeasonCard: FC<SeasonCardProps> = ({ compact = false }) => {
  const selectedShow = useAppSelector((state) => state.tvShows.selectedShow);

  if (!selectedShow || !selectedShow._embedded) {
    return <div>Episodes information is not available.</div>;
  }

  const { episodes, seasons } = selectedShow._embedded;
  const seasonsToRender = compact ? [seasons[0]] : seasons;

  return (
    <>
      {seasonsToRender.map((season) => (
        <div key={season.id} className="mb-8">
          <div className="grid grid-cols-4 gap-2">
            {!compact && (
              <h4 className="text-xl font-semibold col-span-4">
                Season {season.number}
              </h4>
            )}
            {getEpisodesBySeason(episodes, season.number, compact).map(
              (episode) => (
                <EpisodeCard
                  key={episode.id}
                  episode={episode}
                  compact={true}
                />
              ),
            )}
            {compact && episodes.length > MAX_COMPACT_EPISODES && (
              <div>
                <Link to={`/shows/${selectedShow.id}/episodes`}>
                  <div className="relative w-full h-16 rounded-lg bg-pink-950 group-hover:opacity-75 transition duration-300 ease-in-out">
                    <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold">
                      More...
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default SeasonCard;

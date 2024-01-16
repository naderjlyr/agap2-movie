import React from "react";
import EpisodeCard from "./EpisodeCard";
import { Episode } from "../../../types/types";

interface SeasonCardProps {
  seasonNumber: number;
  episodes: Episode[];
}

const SeasonCard: React.FC<SeasonCardProps> = ({ seasonNumber, episodes }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-4">Season {seasonNumber}</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default SeasonCard;

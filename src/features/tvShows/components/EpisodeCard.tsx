import React from "react";
import { Episode } from "../../../types/types";
import { Link } from "react-router-dom";

interface EpisodeCardProps {
  episode: Episode;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img
        className="w-full aspect-w-16 aspect-h-9"
        src={episode.image?.medium}
        alt={episode.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{episode.name}</div>
        <p className="text-gray-700 text-base">
          {episode.summary.replace(/<[^>]+>/g, "")}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link
          to={`/episode/${episode.id}`}
          className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default EpisodeCard;

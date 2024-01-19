import React, { FC } from "react";
import { Episode } from "../../../../types/types";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { stripTags } from "../../../../utils";

type EpisodeDetailCardProps = {
  episode: Episode;
};

const EpisodeDetailCard: FC<EpisodeDetailCardProps> = ({ episode }) => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-800 dark:bg-gray-100">
      <div className="w-full md:flex-1">
        <img
          src={episode.image?.original || "/poster-not-available.jpg"}
          alt={episode.name}
          className="w-full h-auto object-cover rounded-sm"
        />
      </div>
      <div className="p-4 md:flex-1 md:p-8">
        <h1 className="text-4xl font-bold mb-4">{episode.name}</h1>
        <h2 className="text-xl text-gray-600 mb-2">
          Season {episode.season}, Episode {episode.number}
        </h2>

        <div className="flex flex-row flex-nowrap justify-start gap-2 text-sm text-gray-400 mb-4">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-2" />
            <span>
              Aired: {episode.airdate} at {episode.airtime}
            </span>
          </div>
          <div className="flex items-center">
            <FaClock className="mr-2" />
            <span>Runtime: {episode.runtime} mins</span>
          </div>
        </div>

        <h5 className="text-2xl font-bold mb-2">Summary</h5>
        <p className="mt-4">
          {stripTags(episode?.summary || "") || "No summary available."}
        </p>

        <div className="mt-4"></div>
      </div>
    </div>
  );
};

export default EpisodeDetailCard;

import React, { FC } from "react";
import { Episode } from "../../../types/types";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { stripTags } from "../../../utils";

type EpisodeDetailCardProps = {
  episode: Episode;
};

const EpisodeDetailCard: FC<EpisodeDetailCardProps> = ({ episode }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:flex-1">
        {/* Episode Image */}
        <img
          src={episode.image?.original || "/path-to-default-episode-image.jpg"}
          alt={episode.name}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="p-4 md:flex-1 md:p-8">
        {/* Episode Title and Number */}
        <h1 className="text-4xl font-bold mb-4">{episode.name}</h1>
        <h2 className="text-xl text-gray-600 mb-2">
          Season {episode.season}, Episode {episode.number}
        </h2>

        {/* Air Date and Runtime */}
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

        {/* Episode Summary */}
        <h5 className="text-2xl font-bold mb-2">Summary</h5>
        <p className="mt-4">
          {stripTags(episode.summary) || "No summary available."}
        </p>

        {/* Additional Episode Details */}
        <div className="mt-4">
          {/* Additional details can be added here if needed */}
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetailCard;

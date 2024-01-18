import React, { FC } from "react";
import { Show } from "../../../types/types";
import { FaHeart, FaPlay, FaCalendarAlt, FaClock } from "react-icons/fa";
import { formatDate, getGenresString, getScheduleString } from "../../../utils";
import SeasonCard from "./SeasonCard";
type TVShowCardProps = {
  tvShow: Show;
};

const TVShowCard: FC<TVShowCardProps> = ({ tvShow }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:flex-1">
        {/* Poster */}
        <img
          src={tvShow.image.original}
          alt={tvShow.name}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="p-4 md:flex-1 md:p-8">
        {/* Title and Rating */}
        <div className="flex  flex-col mb-4">
          <div className={"flex justify-between"}>
            <h1 className={"text-4xl font-bold pb-2"}>{tvShow.name}</h1>
            <div className={"flex justify-center items-center"}>
              <FaHeart className="text-red-500 mr-2" />
              <span className="text-xl">{tvShow.rating.average}</span>
            </div>
          </div>
          <div className="flex flex-row flex-nowrap justify-start gap-2 text-sm text-gray-400">
            <span>{formatDate(tvShow.premiered)} | </span>
            <span>{getGenresString(tvShow.genres)} | </span>
            <span>{tvShow.runtime} min</span>
          </div>
        </div>
        {/* Summary */}
        <h5 className={"text-2xl font-bold pb-2"}>Details</h5>
        <p className="mt-4">{tvShow.summary}</p>
        {/* Details */}
        <div className="mt-4">
          <div className="mb-2 flex items-center">
            <FaCalendarAlt className="mr-2" /> Premiered: {tvShow.premiered}
          </div>
          <div className="mb-2 flex items-center">
            <FaClock className="mr-2" /> Runtime: {tvShow.runtime} mins
          </div>
          <div>Status: {tvShow.status}</div>
          <div>Schedule: {getScheduleString(tvShow.schedule)}</div>
        </div>
        {/* Play Button */}
        <button className="mt-4 inline-flex items-center justify-center bg-pink-950 text-white hover:bg-pink-900 font-medium py-2 px-4 rounded-md transition duration-300">
          <FaPlay className="mr-2" /> Watch Trailer
        </button>
        <div className="mt-4 flex flex-col">
          <h4 className="text-2xl font-bold mb-4">Explore episodes</h4>
          <SeasonCard compact={true} />
        </div>
      </div>
    </div>
  );
};

export default TVShowCard;

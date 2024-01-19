import React, { FC } from "react";
import { Show } from "../../../types/types";
import { FaHeart, FaPlay, FaCalendarAlt, FaClock } from "react-icons/fa";
import { formatDate, getGenresString, getScheduleString } from "../../../utils";
import SeasonCard from "./Seasons/SeasonCard";
type TVShowCardProps = {
  tvShow: Show;
};

const TVShowCard: FC<TVShowCardProps> = ({ tvShow }) => {
  const handleWatchTrailer = () => {
    const query = encodeURIComponent(`${tvShow.name} Trailer`);
    const youtubeUrl = `https://www.youtube.com/results?search_query=${query}`;
    window.open(youtubeUrl, "_blank");
  };
  return (
    <div className="flex flex-col justify-center  md:flex-row dark:bg-gray-800">
      <div className="w-2/6">
        <img
          src={tvShow.image?.original || "/poster-not-available.jpg"}
          alt={tvShow.name}
          className="  object-cover rounded-lg"
        />
      </div>
      <div className="p-4 md:flex-1 md:p-8">
        <div className="flex flex-col mb-4">
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
        <h5 className={"text-2xl font-bold pb-2"}>Details</h5>
        <p className="mt-4">{tvShow.summary}</p>
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
        <button
          onClick={handleWatchTrailer}
          className="mt-4 inline-flex items-center justify-center bg-pink-950 text-white hover:bg-pink-900 font-medium py-2 px-4 rounded-md transition duration-300"
        >
          <FaPlay className="mr-2" /> Watch Trailer
        </button>
        <div className="mt-4 flex flex-col">
          <h4 className="text-2xl font-bold mb-4">Explore episodes</h4>
          <SeasonCard compact={true} />
        </div>
        <div className="mt-8 w-full">
          <h4 className="text-2xl font-bold mb-4">Cast</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tvShow?._embedded?.cast?.map((castMember) => (
              <div
                key={`${castMember.person.id}-${castMember.character.id}`}
                className="text-center"
              >
                <img
                  src={
                    castMember.person.image?.medium || "/default-cast-image.jpg"
                  }
                  alt={castMember.person.name}
                  className="rounded-full w-24 h-24 object-cover mx-auto"
                />
                <h5 className="mt-2 font-semibold">{castMember.person.name}</h5>
                <p className="text-sm">{castMember.character.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShowCard;

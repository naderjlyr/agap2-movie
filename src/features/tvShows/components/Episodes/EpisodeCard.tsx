import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { Episode } from "../../../../types/types";
import { FaCalendarAlt } from "react-icons/fa";
import { stripTags } from "../../../../utils";
import { useAppSelector } from "../../../store";

interface EpisodeCardProps {
  episode: Episode;
  compact?: boolean;
}

const EpisodeCard: FC<EpisodeCardProps> = memo(
  ({ episode, compact = false }) => {
    const selectedShow = useAppSelector((state) => state.tvShows.selectedShow);

    const imageClassNames = compact
      ? "w-full h-36 object-cover rounded-lg"
      : "w-full h-52 md:h-72 object-cover rounded-lg";

    return (
      <div className="group">
        <Link to={`/shows/${selectedShow?.id}/episodes/${episode.id}`}>
          <div className="relative">
            <img
              src={
                episode.image?.original || "/path-to-default-episode-image.jpg"
              }
              alt={episode.name || "Episode thumbnail"}
              className={imageClassNames}
            />
            <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs font-semibold px-2 py-1 rounded-md">
              Ep. {episode.number}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-lg dark:bg-opacity-70">
              <div className="flex flex-col justify-end h-full p-4">
                <span
                  className={
                    compact
                      ? "text-xs text-center text-white"
                      : "text-lg text-white font-semibold mb-2"
                  }
                >
                  {episode.name || "Episode Title"}
                </span>
                {!compact && (
                  <>
                    <div className="text-white text-sm">
                      <FaCalendarAlt className="inline-block mr-1" />
                      {episode.airdate || "Unknown Date"}
                    </div>
                    <p className="text-white text-xs mt-2">
                      {stripTags(episode.summary) || "No summary available."}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  },
);

export default EpisodeCard;

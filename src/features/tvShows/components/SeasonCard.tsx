import React, { FC } from "react";
import { useAppSelector } from "../../useAppSelector";

const SeasonCard: FC = () => {
  const selectedShow = useAppSelector((state) => state.tvShows.selectedShow);

  if (!selectedShow?._embedded?.seasons) {
    return null;
  }

  return (
    <>
      {selectedShow._embedded.seasons.map((season) => (
        <div key={season.id} className="season-card">
          <h4>Season {season.number}</h4>
          {/* Render episodes */}
        </div>
      ))}
    </>
  );
};

export default SeasonCard;

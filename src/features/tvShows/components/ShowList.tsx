import React from "react";
import { ShowSearchResult } from "../../../types/types";
import { Link } from "react-router-dom";

interface ShowListProps {
  shows: ShowSearchResult[];
}

const ShowList: React.FC<ShowListProps> = ({ shows }) => {
  return (
    <div>
      {shows.map((showResult) => (
        <Link key={showResult.show.id} to={`/show/${showResult.show.id}`}>
          <h3>{showResult.show.name}</h3>
          {showResult.show.image && (
            <img
              src={showResult.show.image.medium}
              alt={showResult.show.name}
            />
          )}
        </Link>
      ))}
    </div>
  );
};

export default ShowList;

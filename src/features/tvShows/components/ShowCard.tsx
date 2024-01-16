import { FC } from "react";
import { Show } from "../../../types/types";

interface ShowCardProps {
  show: Show;
}

const ShowCard: FC<ShowCardProps> = ({ show }) => {
  return (
    <div
      className="relative bg-cover bg-center mb-8"
      style={{ backgroundImage: `url(${show.image?.original})` }}
    >
      <div className="bg-black bg-opacity-50 p-6 text-white">
        <h2 className="text-4xl font-bold mb-2">{show.name}</h2>
        <p>{show.summary.replace(/<[^>]+>/g, "")}</p>
      </div>
    </div>
  );
};

export default ShowCard;

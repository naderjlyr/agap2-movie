import { Link } from "react-router-dom";
import { FC } from "react";
import { Show } from "../types/types";

interface ShowLinkProps {
  show: Show;
}

const ShowLink: FC<ShowLinkProps> = ({ show }) => {
  return <Link to={`/tvshows/${show.id}/${show.name}`}>{show.name}</Link>;
};

export default ShowLink;

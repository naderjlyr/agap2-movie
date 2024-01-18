import React from "react";
import TVShowCard from "../../features/tvShows/components/TVShowCard";
import useTvShows from "../../hooks/useTvShows";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const { id } = useParams<{ id?: string }>();
  const showId = id ? parseInt(id, 10) : 1955;
  const { selectedShow } = useTvShows(showId);

  if (!selectedShow) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-950 py-8">
      <TVShowCard tvShow={selectedShow} />
    </div>
  );
};

export default HomePage;

import { FC } from "react";
import { useParams } from "react-router-dom";
import useTvShows from "../../hooks/useTvShows";
import TVShowCard from "../../features/tvShows/components/TVShowCard";

const ShowDetailsPage: FC = () => {
  const { id } = useParams<{ id?: string }>();
  const showId = id ? parseInt(id, 10) : 1955;
  const { selectedShow } = useTvShows(showId);

  if (!selectedShow) {
    return <div>Loading show data...</div>;
  }

  return (
    <div className="bg-gray-950 py-8">
      <TVShowCard tvShow={selectedShow} />
    </div>
  );
};

export default ShowDetailsPage;

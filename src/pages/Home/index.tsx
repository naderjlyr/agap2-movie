import TVShowCard from "../../features/tvShows/components/TVShowCard";
import useTvShows from "../../hooks/useTvShows";

const Home = () => {
  const { selectedShow } = useTvShows();
  return (
    <div className="p-4">
      {selectedShow && <TVShowCard tvShow={selectedShow} />}
    </div>
  );
};

export default Home;

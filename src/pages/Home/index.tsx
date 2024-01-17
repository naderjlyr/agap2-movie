import { FC } from "react";
import useTvShows from "../../hooks/useTvShows";
import HeroSection from "../../features/tvShows/components/HeroSection";

const Home: FC = () => {
  const { selectedShow } = useTvShows("Powerpuff Girls");
  console.log(selectedShow);
  return (
    <>
      {selectedShow && (
        <HeroSection
          showImage={selectedShow.image.original}
          showInfo={selectedShow}
        />
      )}
      <div>{selectedShow?.name}</div>
    </>
  );
};

export default Home;

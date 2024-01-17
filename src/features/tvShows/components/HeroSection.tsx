import { FC, useState } from "react";
import { Show } from "../../../types/types";

interface HeroSectionProps {
  showInfo: Show;
}

const HeroSection: FC<HeroSectionProps> = ({ showInfo }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="relative">
      {imgError ? (
        <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
          <span>Image not available</span>
        </div>
      ) : (
        <img
          src={showInfo.backgroundImageUrl}
          alt={showInfo.name}
          className="w-full h-auto object-cover"
          onError={() => setImgError(true)}
        />
      )}
      <div className="absolute left-0 bottom-0 bg-white bg-opacity-75 p-4">
        <h2 className="text-2xl font-bold">{showInfo.name}</h2>
        <p className="my-2">{showInfo.summary}</p>
        <a href={`/tvshows/${showInfo.id}/${showInfo.name}`} className="btn">
          View Details
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

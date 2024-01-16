import React, { FC } from "react";
interface HeroSectionProps {
  showImage: string;
  showInfo: string;
}
const HeroSection: FC<HeroSectionProps> = ({ showImage, showInfo }) => {
  return (
    <div className="relative">
      <img src={showImage} alt="Show" className="w-full h-auto" />
      <div className="absolute left-0 bottom-0 bg-white bg-opacity-75 p-4">
        <p>{showInfo}</p>
      </div>
    </div>
  );
};

export default HeroSection;

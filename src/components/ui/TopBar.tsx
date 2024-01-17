import { IoPartlySunnyOutline } from "react-icons/io5";
import { FC } from "react";

interface TopBarProps {
  time?: string;
  date?: string;
  temperature: string;
  username: string;
}

const TopBar: FC<TopBarProps> = ({ time, date, temperature, username }) => {
  return (
    <div className="bg-transparent text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <span className="font-bold text-lg">{time}</span>
        <span>{date}</span>
      </div>
      <div className="flex items-center space-x-4">
        <IoPartlySunnyOutline />
        <span>{temperature}</span>
        <span>{username}</span>
      </div>
    </div>
  );
};

export default TopBar;

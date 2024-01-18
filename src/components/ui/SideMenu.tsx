import { FC } from "react";
import NavLink from "../NavLink";
import { selectSelectedShow } from "../../features/tvShows/tvShowsSlice";
import { useAppSelector } from "../../features/useAppSelector";

const SideMenu: FC = () => {
  const selectedShow = useAppSelector(selectSelectedShow);
  if (!selectedShow) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-px-[500] flex flex-col justify-between h-screen bg-gray-950 py-4">
      <h4 className="text-white text-xl text-center font-bold px-4 mb-4">
        {selectedShow.name}
      </h4>
      <div className="flex-grow text-center flex flex-col justify-center">
        {/*<NavLink href={`/`} title="Details" />*/}
        <NavLink href={`/shows/${selectedShow.id}`} title="Details" />
        <NavLink href={`/shows/${selectedShow.id}/seasons`} title="Seasons" />
        <NavLink href={`/shows/${selectedShow.id}/episodes`} title="Episodes" />
      </div>
    </div>
  );
};

export default SideMenu;

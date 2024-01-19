import { FC, useEffect, useRef } from "react";
import NavLink from "../../common/NavLink";
import { selectSelectedShow } from "../../../features/tvShows/tvShowsSlice";
import { FaTimes } from "react-icons/fa";
import { useAppSelector } from "../../../features/store";

interface DrawerMenuProps {
  isMenuOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const DrawerMenu: FC<DrawerMenuProps> = ({ isMenuOpen, setSidebarOpen }) => {
  const selectedShow = useAppSelector(selectSelectedShow);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setSidebarOpen]);

  return (
    <aside
      ref={sidebarRef}
      className={`fixed left-0 top-0 z-50 h-screen w-72 flex flex-col overflow-y-hidden bg-gray-950 dark:bg-gray-800 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} duration-300 ease-linear`}
    >
      <button
        onClick={() => setSidebarOpen(false)}
        aria-label="Close Menu"
        className="flex justify-end p-4"
      >
        <FaTimes size="1.4rem" />
      </button>
      <div className="flex-grow flex items-center justify-center">
        {selectedShow ? (
          <nav className="w-full">
            <ul className="flex flex-col items-center justify-center">
              <NavLink to={`/shows/${selectedShow.id}`} title="Details" />
              <NavLink
                to={`/shows/${selectedShow.id}/seasons`}
                title="Seasons"
              />
              <NavLink
                to={`/shows/${selectedShow.id}/episodes`}
                title="Episodes"
              />
            </ul>
          </nav>
        ) : (
          <nav className="w-full">
            <ul className="flex flex-col items-center justify-center">
              <NavLink to="/" title="Home" />
            </ul>
          </nav>
        )}
      </div>
    </aside>
  );
};

export default DrawerMenu;

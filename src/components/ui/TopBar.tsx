import React, { FC } from "react";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { useDarkMode } from "../../hooks/useDarkMode";
import SearchBar from "./SearchBar";

interface TopBarProps {
  toggleMenu: () => void;
}

const TopBar: FC<TopBarProps> = ({ toggleMenu }) => {
  const { isDarkMode, toggleDarkModeHandler } = useDarkMode();

  return (
    <nav className="flex items-center justify-between p-4 bg-transparent bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <button aria-label="Open Menu" onClick={toggleMenu}>
        <FaBars />
      </button>
      <SearchBar />
      <button onClick={toggleDarkModeHandler} aria-label="Toggle Dark Mode">
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default TopBar;

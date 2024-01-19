import { FC } from "react";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { useDarkMode } from "../../../hooks/useDarkMode";
import SearchBar from "../SearchBar/SearchBar";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
interface TopBarProps {
  isMenuOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}
const TopBar: FC<TopBarProps> = ({ isMenuOpen, setSidebarOpen }) => {
  const { isDarkMode, toggleDarkModeHandler } = useDarkMode();

  return (
    <nav className="z-20 flex items-center justify-between p-4 bg-transparent bg-opacity-50 backdrop-filter backdrop-blur-lg dark:bg-gray-800">
      <button
        aria-label="Open Menu"
        onClick={() => setSidebarOpen(!isMenuOpen)}
        style={{ zIndex: isMenuOpen ? 60 : 50 }}
      >
        <FaBars />
      </button>
      <SearchBar />
      <ToggleSwitch
        isOn={isDarkMode}
        onToggle={toggleDarkModeHandler}
        iconOn={<FaSun />}
        iconOff={<FaMoon />}
      />
    </nav>
  );
};

export default TopBar;

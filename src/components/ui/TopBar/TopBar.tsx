import { FC } from "react";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { useDarkMode } from "../../../hooks/useDarkMode";
import Index from "../SearchBar";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
interface TopBarProps {
  isMenuOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}
const TopBar: FC<TopBarProps> = ({ isMenuOpen, setSidebarOpen }) => {
  const { isDarkMode, toggleDarkModeHandler } = useDarkMode();

  return (
    <nav className="z-20 flex items-center justify-between p-4 bg-gray-800 dark:bg-gray-100">
      <button
        aria-label="Open Menu"
        onClick={() => setSidebarOpen(!isMenuOpen)}
        style={{ zIndex: isMenuOpen ? 60 : 50 }}
      >
        <FaBars />
      </button>
      <Index />
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

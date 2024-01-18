import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

const TopBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-transparent bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="flex items-center space-x-4">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default TopBar;

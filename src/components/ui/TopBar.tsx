import React, { FC, useState, useEffect } from "react";
import { FaHome, FaInfoCircle, FaMoon, FaSun } from "react-icons/fa";

const TopBar: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <div className="logo">Logo</div>
      <div className="navigation flex items-center">
        <a href="/" className="flex items-center mx-2">
          <FaHome className="mr-1" /> Home
        </a>
        <a href="/about" className="flex items-center mx-2">
          <FaInfoCircle className="mr-1" /> About
        </a>
        {/* Toggle icon for dark mode */}
        <button onClick={toggleDarkMode} className="flex items-center mx-2">
          {isDarkMode ? (
            <FaSun className="mr-1" />
          ) : (
            <FaMoon className="mr-1" />
          )}
          Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default TopBar;

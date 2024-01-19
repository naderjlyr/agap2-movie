import { useEffect } from "react";
import { toggleDarkMode } from "../features/tvShows/tvShowsSlice";
import { useAppDispatch, useAppSelector } from "../features/store";

export const useDarkMode = () => {
  const isDarkMode = useAppSelector((state) => state.tvShows.isDarkMode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkModeHandler = () => {
    dispatch(toggleDarkMode());
  };

  return { isDarkMode, toggleDarkModeHandler };
};

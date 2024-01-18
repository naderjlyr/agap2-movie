import { useEffect } from "react";
import { useAppSelector } from "../features/useAppSelector";
import { useAppDispatch } from "../features/useAppDispatch";
import { toggleDarkMode } from "../features/tvShows/tvShowsSlice";

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

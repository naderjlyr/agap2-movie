import axios from "axios";
import { Show, ShowImageType, ShowSearchResult } from "../types/types";

const API_URL = process.env.REACT_APP_API_URL || "https://api.tvmaze.com/";

export const searchShows = async (
  query: string,
): Promise<ShowSearchResult[]> => {
  const response = await axios.get(`${API_URL}search/shows?q=${query}`);
  return response.data;
};

export const getShowDetails = async (showId: number): Promise<Show> => {
  const response = await axios.get(`${API_URL}shows/${showId}?embed=episodes`);
  return response.data;
};

export const fetchTvShowBackgroundImageUrl = async (
  showId: number,
): Promise<string | undefined> => {
  try {
    const response = await axios.get(`${API_URL}shows/${showId}/images`);
    const backgroundImages = response.data.filter(
      (img: ShowImageType) => img.type === "background",
    );
    console.log("from service", backgroundImages);
    const mainBackgroundImage =
      backgroundImages.find((img: ShowImageType) => img.main) ||
      backgroundImages[0];
    return mainBackgroundImage?.resolutions.original.url;
  } catch (error) {
    console.error(
      "Error fetching background image for show ID " + showId,
      error,
    );
    throw error;
  }
};

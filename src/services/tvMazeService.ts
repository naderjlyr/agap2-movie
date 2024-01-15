import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "https://api.tvmaze.com/";

export const searchShows = async (query: string) => {
  const response = await axios.get(`${API_URL}search/shows?q=${query}`);
  return response.data;
};

export const singleSearchShow = async (query: string) => {
  const response = await axios.get(`${API_URL}singlesearch/shows?q=${query}`);
  return response.data;
};

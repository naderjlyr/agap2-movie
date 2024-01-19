import { Episode } from "../types/types";

export const stripTags = (htmlString: string): string => {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "") || "";
};
export const getGenresString = (genres: string[]): string => {
  return genres.join(", ");
};

export const getScheduleString = (schedule: {
  time: string;
  days: string[];
}): string => {
  return schedule.time
    ? `${schedule.days.join(", ")} at ${schedule.time}`
    : `${schedule.days.join(", ")}`;
};
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};
export const textShortener = (text: string, maxLength: 150): string => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};
export const groupEpisodesBySeason = (episodes: Episode[]) => {
  return episodes.reduce(
    (acc, episode) => {
      (acc[episode.season] = acc[episode.season] || []).push(episode);
      return acc;
    },
    {} as Record<number, Episode[]>,
  );
};

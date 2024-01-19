import { FC, useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useDebounce } from "use-debounce";
import { searchShows } from "../../../features/tvShows/tvShowsSlice";
import { Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { useAppDispatch, useAppSelector } from "../../../features/store";

const SearchBar: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const dispatch = useAppDispatch();
  const searchResults = useAppSelector((state) => state.tvShows.searchResults);
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (debouncedSearchQuery) {
      dispatch(searchShows(debouncedSearchQuery));
    }
  }, [debouncedSearchQuery, dispatch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchBarRef]);

  const transitions = useTransition(searchQuery.length > 0, {
    from: { opacity: 0, transform: "translateY(-10px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(-10px)" },
    config: { duration: 700 },
  });

  return (
    <div ref={searchBarRef} className="relative z-50">
      <input
        type="search"
        className="pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 focus:outline-none focus:border-gray-300 w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="absolute top-full left-0 right-0 bg-white shadow-md rounded-b-lg"
            >
              {searchResults.map((result) => (
                <Link key={result.show.id} to={`/shows/${result.show.id}`}>
                  <div className="flex items-center p-2 hover:bg-gray-100">
                    {result.show.image && (
                      <img
                        src={result.show.image.medium}
                        alt={result.show.name}
                        className="w-10 h-10 mr-2"
                      />
                    )}
                    <span>{result.show.name}</span>
                  </div>
                </Link>
              ))}
            </animated.div>
          ),
      )}
    </div>
  );
};

export default SearchBar;

import React, { FC, useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useDebounce } from "use-debounce";
import { useAppDispatch } from "../../features/useAppDispatch";
import { useAppSelector } from "../../features/useAppSelector";
import { searchShows } from "../../features/tvShows/tvShowsSlice";
import { Link } from "react-router-dom";

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

  return (
    <div ref={searchBarRef} className="relative">
      <input
        type="search"
        className="pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 focus:outline-none focus:border-gray-300 w-full"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      {searchQuery && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md rounded-b-lg">
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
        </div>
      )}
    </div>
  );
};

export default SearchBar;

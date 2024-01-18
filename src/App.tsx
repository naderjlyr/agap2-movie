import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import SideMenu from "./components/ui/SideMenu";
import TopBar from "./components/ui/TopBar";
import SeasonsPage from "./pages/seasons";
import EpisodesPage from "./pages/episodes";
import EpisodeDetailsPage from "./pages/episode-details";
import NotFound from "./components/NotFound";
import ShowDetailsPage from "./pages/show-details";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Router>
      <div className="flex h-screen bg-white dark:bg-gradient-to-t from-black via-gray-950 to-gray-900">
        {isMenuOpen && <SideMenu />}
        <div className="flex-grow flex flex-col">
          <TopBar toggleMenu={toggleMenu} />
          <div className="flex-grow overflow-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shows/:id" element={<ShowDetailsPage />} />
              <Route path="/shows/:id/seasons" element={<SeasonsPage />} />
              <Route path="/shows/:id/episodes" element={<EpisodesPage />} />
              <Route
                path="/shows/:id/episodes/:episodeId"
                element={<EpisodeDetailsPage />}
              />
              {/*<Route path="/discover" element={<Discover />} />*/}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

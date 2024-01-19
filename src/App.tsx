import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import SeasonsPage from "./pages/seasons";
import EpisodesPage from "./pages/episodes";
import EpisodeDetailsPage from "./pages/episode-details";
import NotFound from "./components/common/NotFound";
import ShowDetailsPage from "./pages/show-details";
import Layout from "./components/common/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shows/:id" element={<ShowDetailsPage />} />
          <Route path="/shows/:id/seasons" element={<SeasonsPage />} />
          <Route path="/shows/:id/episodes" element={<EpisodesPage />} />
          <Route
            path="/shows/:id/episodes/:episodeId"
            element={<EpisodeDetailsPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

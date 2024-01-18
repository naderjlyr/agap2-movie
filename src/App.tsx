import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowDetails from "./pages/ShowDetails/ShowDetails";
// import Discover from "./pages/Discover/Discover";
import SideMenu from "./components/ui/SideMenu";
import TopBar from "./components/ui/TopBar";
import SeasonCard from "./features/tvShows/components/SeasonCard";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gradient-to-t from-black via-gray-950 to-gray-900">
        <SideMenu />
        <div className="flex-grow flex flex-col">
          <TopBar />
          <div className="flex-grow overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shows/:id/:name" element={<ShowDetails />} />
              <Route path="/shows/:id/:season" element={<SeasonCard />} />
              {/*<Route path="/discover" element={<Discover />} />*/}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

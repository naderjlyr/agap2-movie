import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Index from "./pages/episode-details";

export default (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/shows/:id/:name" element={<Index />} />
  </Routes>
);

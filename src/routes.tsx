import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShowDetails from "./pages/ShowDetails/ShowDetails";

export default (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/shows/:id/:name" element={<ShowDetails />} />
  </Routes>
);

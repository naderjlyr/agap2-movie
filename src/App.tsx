import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import ShowDetails from "./pages/ShowDetails/ShowDetails";

function App() {
  return (
    <div className="flex item-center justify-center text-center">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<ShowDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

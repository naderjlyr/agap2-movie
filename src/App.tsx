import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowDetails from "./pages/ShowDetails/ShowDetails";
import TopBar from "./components/ui/TopBar";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="flex items-center justify-center text-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows/:id/:name" element={<ShowDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

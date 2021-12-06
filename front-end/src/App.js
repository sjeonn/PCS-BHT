import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import './App.css';
import LandingPage from "./LandingPage";
import Listings from "./Listings";
import Resources from "./Resources";
import AboutUs from "./AboutUs";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="listings" element={<Listings />} />
        <Route path="resources" element={<Resources />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
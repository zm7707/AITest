import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalog" element={<Catalog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

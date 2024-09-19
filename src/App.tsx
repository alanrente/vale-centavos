import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IconButton from "./components/IconButton";
import { usePngs } from "./hooks/usePngs";
import CardAnuncio from "./components/CardAnuncio";
import CardCupom from "./components/CardCupom";
import CardAnuncioBairro from "./components/CardAnuncioBairro";
import Home from "./pages/Home";
import { Playground } from "./pages/Playground";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plauground" element={<Playground />} />
      </Routes>
    </Router>
  );
}

export default App;

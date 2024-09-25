import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Playground } from "./pages/Playground";
import { ValeCentavosProvider } from "./contexts/ValeCentavosContext";

function App() {
  return (
    <BrowserRouter>
      <ValeCentavosProvider value={{}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </ValeCentavosProvider>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IconButton from "./components/IconButton";
import { usePngs } from "./hooks/usePngs";

function App() {
  const pngs = usePngs();
  const Home = () => (
    <div style={{ margin: "50px", display: "flex", gap: "5px" }}>
      {Object.entries(pngs).map(([key, value]) => {
        return (
          <IconButton
            id={key}
            count={9}
            maxCount={9}
            description={key}
            key={key}
          />
        );
      })}
    </div>
  );

  const Sobre = () => <div>Sobre</div>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IconButton from "./components/IconButton";
import { usePngs } from "./hooks/usePngs";

function App() {
  const pngs = usePngs();
  const Home = () => (
    <div
      style={{
        margin: "50px",
        display: "flex",
        gap: "15px",
        alignItems: "center",
      }}
    >
      <img style={{}} src={require(`./icons/png/SetaEsquerda.png`)} alt="" />

      {Object.entries(pngs)
        .filter(([key]) => !key.includes("Seta"))
        .map(([key, value]) => {
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

      <img style={{}} src={require(`./icons/png/SetaDireita.png`)} alt="" />
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

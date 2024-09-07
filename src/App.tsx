import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IconButton from "./components/IconButton";
import { Carro, Livros, SetaEsquerda, Tudo, Violao } from "./icons/svg";

function App() {
  const Home = () => (
    <div style={{ margin: "50px", display: "flex", gap: "5px" }}>
      <SetaEsquerda />
      <Tudo />
      <Violao />
      <IconButton ReactSvgElement={<Livros />} count={9} maxCount={9} description="Leitura" key={"teste"} />
      <IconButton ReactSvgElement={<Carro />} count={9} maxCount={9} description="Carro" key={"carro"} />
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

import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IconButton from "./components/IconButton";
import { usePngs } from "./hooks/usePngs";
import CardAnuncio from "./components/CardAnuncio";

function App() {
  const pngs = usePngs();
  const Home = () => (
    <div className="home-page">
      <div
        className="icons-container"
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
      <CardAnuncio
        descriptions={{
          descricao: "Especial frango e carne 15kg",
          titulo: "Ração Bio Care Premium",
          valor: "999.99",
          condição: "NOVO",
        }}
        imagem="imagem"
        nome="Nome Vendedor"
      />
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

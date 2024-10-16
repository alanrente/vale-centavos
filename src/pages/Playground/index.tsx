import Cadastro from "../../components/Cadastro";
import CardAnuncio from "../../components/CardAnuncio";
import CardAnuncioBairro from "../../components/CardAnuncioBairro";
import CardCupom from "../../components/CardCupom/CardCupom";
import ComprarCupom from "../../components/ComprarCupom";
import IconButton from "../../components/IconButton";
import { usePngs } from "../../hooks/usePngs";

export function Playground() {
  const pngs = usePngs();
  return (
    <div
      className="home-page"
      style={{
        height: "90%",
        border: "1px solid black",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Cadastro />
      <ComprarCupom />
      {/* <div
        className="icons-container"
        style={{
          margin: "50px",
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <img style={{}} src={require(`../../icons/png/SetaEsquerda.png`)} alt="" />

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

        <img style={{}} src={require(`../../icons/png/SetaDireita.png`)} alt="" />
      </div> */}
      <CardAnuncio
        descriptions={{
          descricao: "Especial frango e carne 15kg",
          titulo: "Ração Bio Care Premium",
          valor: "999.99",
          condicao: "NOVO",
        }}
        imagem={require(`../../icons/png/SacoRacao.png`)}
        nome="Nome Vendedor"
      />

      <CardCupom
        imagem={require("../../icons/png/HotDog.png")}
        nome="Cachorro-quente do Romário"
        descriptions={{
          descricao: "Especial frango e carne 15kg",
          titulo: "Ração Bio Care Premium",
          valor: "99,99",
          valorCupom: "0,90",
          qtdCupom: "10",
          valorAntigo: "100,00",
        }}
      />

      <CardAnuncioBairro
        imageUrl={require("../../icons/png/Salgadinhos.png")}
        title="100 SALGADINHOS DE FESTA POR R$ 35,00"
        description="Favor consultar variedade de sabores no dia que fizer seu pedido."
        valorAntigo="45,00"
        valor="35,00"
        valorCupom="0,50"
        validade="Out/2024"
        qtdCupom={10}
      />
    </div>
  );
}

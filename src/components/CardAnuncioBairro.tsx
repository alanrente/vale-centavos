import React, { CSSProperties, useContext } from "react";
import { fontColor } from "../styles/global.style";
import CardCupom from "./CardCupom";
import { ValeCentavosContext } from "../contexts/ValeCentavosContext";

interface CardAnuncioBairroProps {
  title: string;
  description: string;
  imageUrl: string;
  valorAntigo: string;
  valor: string;
  valorCupom: string;
  validade: string;
  qtdCupom: number;
}

function CardAnuncioBairro({
  valorAntigo,
  valor,
  title,
  description,
  validade,
  imageUrl,
  valorCupom,
  qtdCupom,
}: CardAnuncioBairroProps) {
  const body: CSSProperties = {
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: "1563px",
    height: "150px",
    border: "1px solid #A7A7A7",
    // filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    backgroundColor: "#FFFFFF",
    borderRadius: "5px",
  };

  const descriptionStyle: CSSProperties = {
    margin: "7px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const valoresStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const valorAntigoStyle: CSSProperties = {
    fontSize: "13px",
    ...fontColor.red,
  };

  const valorNovoStyle: CSSProperties = {
    fontSize: "16px",
    ...fontColor.silverLight,
  };

  const { state, setState } = useContext(ValeCentavosContext);

  const handleClick = () => {
    setState(state + 1);
  }

  return (
    <div style={body} onClick={handleClick}>
      <div>
        <img
          style={{ width: "150px", height: "150px" }}
          src={imageUrl}
          alt={title}
        />
      </div>
      <div style={descriptionStyle}>
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <span style={{ ...valorAntigoStyle }}>De:</span>
          <span style={valorAntigoStyle}>{valorAntigo}</span>
          <span style={valorNovoStyle}>por:</span>
          <span style={{ ...valorNovoStyle, fontWeight: "bold" }}>{valor}</span>
        </span>
        <span style={{ ...fontColor.silver, fontSize: 24, fontWeight: "bold" }}>
          {title}
        </span>
        <span style={{ ...fontColor.silver, fontSize: 18 }}>{description}</span>
        <span style={{ ...valorAntigoStyle }}>
          Promoção válida: até {validade}
        </span>
      </div>
      <CardCupom
        nome="Cachorro-quente do Romário"
        descriptions={{
          valor,
          valorCupom,
          qtdCupom,
        }}
      />
    </div>
  );
}

export default CardAnuncioBairro;

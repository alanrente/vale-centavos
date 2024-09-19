import React, { CSSProperties } from "react";
import { fontColor } from "../styles/global.style";
import CardCupom from "./CardCupom";

interface CardAnuncioBairroProps {
  title: string;
  description: string;
  imageUrl: string;
  valorAntigo: string;
  valorNovo: string;
  validade: string;
}

function CardAnuncioBairro({
  valorAntigo,
  valorNovo,
  title,
  description,
  validade,
  imageUrl,
}: CardAnuncioBairroProps) {
  const body: CSSProperties = {
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

  return (
    <div style={body}>
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
          <span style={{ ...valorNovoStyle, fontWeight: "bold" }}>
            {valorNovo}
          </span>
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
          valor: "77,77",
          valorCupom: "40,90",
          qtdCupom: "15",
          condição: "NOVO",
        }}
      />
    </div>
  );
}

export default CardAnuncioBairro;

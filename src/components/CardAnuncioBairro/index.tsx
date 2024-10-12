import React, { CSSProperties, useContext } from "react";
import { fontColor } from "../../styles/global.style";
import CardCupom from "../CardCupom/CardCupom";
import { ValeCentavosContext } from "../../contexts/ValeCentavosContext";
import {
  BodyStyled,
  DescriptionStyled,
  ImageAndDescriptionStyled,
  ValorAntigoStyled,
  ValorNovoStyled,
} from "./index.styled";
import { SectionCupom } from "../SectionCupom";

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
  // const { state, setState } = useContext(ValeCentavosContext);

  // const handleClick = () => {
  //   setState(state + 1);
  // }

  return (
    <BodyStyled>
      <ImageAndDescriptionStyled>
        <img
          style={{ width: "150px", height: "150px" }}
          src={imageUrl}
          alt={title}
        />

        <DescriptionStyled>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <ValorAntigoStyled>De:</ValorAntigoStyled>
            <ValorAntigoStyled>{valorAntigo}</ValorAntigoStyled>
            <ValorNovoStyled>por:</ValorNovoStyled>
            <ValorNovoStyled style={{ fontWeight: "bold" }}>
              {valor}
            </ValorNovoStyled>
          </span>
          <span
            style={{ ...fontColor.silver, fontSize: 24, fontWeight: "bold" }}
          >
            {title}
          </span>
          <span style={{ ...fontColor.silver, fontSize: 18 }}>
            {description}
          </span>
          <ValorAntigoStyled>Promoção válida: até {validade}</ValorAntigoStyled>
        </DescriptionStyled>
      </ImageAndDescriptionStyled>
      <SectionCupom
        {...{
          nome:"Cachorro-quente do Romário",
          valor,
          valorCupom,
          qtdCupom: qtdCupom.toString(),
          valorAntigo,
        }}
      />
    </BodyStyled>
  );
}

export default CardAnuncioBairro;

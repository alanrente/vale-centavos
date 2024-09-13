import React from "react";

export default function CardCupom({
  imagem,
  descriptions,
  nome,
}: {
  imagem: any;
  nome: string;
  descriptions?: any;
}) {
  const background: {
    black: React.CSSProperties;
    silver: React.CSSProperties;
    white: React.CSSProperties;
    green: React.CSSProperties;
  } = {
    black: {
      backgroundColor: "#414141",
    },
    silver: {
      backgroundColor: "#707070",
    },
    white: {
      backgroundColor: "#FFFFFF",
    },
    green: {
      backgroundColor: "#22C55E",
    },
  };

  const fontColor: {
    white: React.CSSProperties;
    black: React.CSSProperties;
    silver: React.CSSProperties;
  } = {
    white: {
      color: "#FFFFFF",
    },
    black: {
      color: "#414141",
    },
    silver: {
      color: "#707070",
    },
  };

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "478px",
    fontFamily: "Inter",
    borderRadius: 5,
    ...background.white,
  };

  const precoFlutuante: React.CSSProperties = {
    fontSize: 20,
    width: 75,
    height: 40,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 14,
    right: 13,
    borderRadius: 5,
    ...fontColor.white,
    ...background.green,
  };

  const childrenBaseStyle: React.CSSProperties = {
    width: "100%",
  };

  const divValorStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const spanValorStyle: React.CSSProperties = {
    fontSize: 13,
  };

  const numbersValorStyle: React.CSSProperties = {
    fontSize: 30,
    fontWeight: "bold",
  };

  return (
    <div style={baseStyle}>
      <div style={{ ...childrenBaseStyle, height: 290, position: "relative" }}>
        <div style={precoFlutuante}>
          <span>{descriptions.valor}</span>
        </div>
        <img src={imagem} style={{ height: "100%", width: "100%" }} />
      </div>
      <div
        style={{
          ...childrenBaseStyle,
          ...fontColor.white,
          ...background.black,
          height: 25,
          alignItems: "center",
        }}
      >
        <span style={{ marginLeft: 10, fontSize: 12 }}>{nome}</span>
      </div>
      <div style={{ ...childrenBaseStyle, height: 124 }}>
        <div style={{ ...fontColor.black, margin: "18px 0 0 27px" }}>
          {descriptions.titulo}
        </div>
        <div style={{ ...fontColor.silver, margin: "18px 0 0 27px" }}>
          {descriptions.descricao}
        </div>
      </div>
      <div
        style={{
          ...childrenBaseStyle,
          height: 110,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            ...fontColor.white,
            ...divValorStyle,
            ...background.black,
            width: "30%",
          }}
        >
          <div>
            <span style={{ ...spanValorStyle }}>VALOR DE</span>
          </div>
          <div style={{ ...numbersValorStyle }}>{descriptions.valor}</div>
          <div>
            <span style={{ ...spanValorStyle }}>REAIS</span>
          </div>
        </div>
        <div
          style={{
            ...divValorStyle,
            width: "40%",
            ...background.white,
            ...fontColor.black,
          }}
        >
          <div>
            <span style={{ ...spanValorStyle }}>USANDO ESTE CUPOM</span>
          </div>
          <div style={{ ...numbersValorStyle }}>{descriptions.valorCupom}</div>
          <div>
            <span style={{ ...spanValorStyle }}>CENTAVOS</span>
          </div>
        </div>
        <div
          style={{
            width: "30%",
            ...background.silver,
            ...fontColor.white,
            ...divValorStyle,
          }}
        >
          <div>
            <span style={{ ...spanValorStyle }}>SÓ TEM</span>
          </div>
          <div style={{ ...numbersValorStyle }}>{descriptions.qtdCupom}</div>
          <div>
            <span style={{ ...spanValorStyle }}>CUPOM</span>
          </div>
        </div>
      </div>
      <div
        style={{
          ...childrenBaseStyle,
          ...fontColor.white,
          ...background.green,
          height: 50,
          fontSize: 13,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0 0 5px 5px",
        }}
      >
        COMPRAR E PAGAR NO PIX
      </div>
    </div>
  );
}

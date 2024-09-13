export default function CardCupom({
  imagem,
  descriptions,
  nome,
}: {
  imagem: string;
  nome: string;
  descriptions?: any;
}) {
  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "478px",
    fontFamily: "Inter",
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

  const colorWhite: React.CSSProperties = {
    color: "#FFFFFF",
  };

  const colorBlack: React.CSSProperties = {
    color: "#414141",
  };

  const colorSilver: React.CSSProperties = {
    color: "#707070",
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
      <div style={{ ...childrenBaseStyle, height: 290 }}>{imagem}</div>
      <div style={{ ...childrenBaseStyle, height: 25 }}>{nome}</div>
      <div style={{ ...childrenBaseStyle, height: 124 }}>
        <div style={{ ...colorBlack, margin: "18px 0 0 27px" }}>
          {descriptions.titulo}
        </div>
        <div style={{ ...colorSilver, margin: "18px 0 0 27px" }}>
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
            ...colorWhite,
            ...divValorStyle,
            width: "30%",
            backgroundColor: "#414141",
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
            ...colorBlack,
            backgroundColor: "#F5F5F5",
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
            ...colorWhite,
            ...divValorStyle,
            backgroundColor: "#707070",
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
          ...colorWhite,
          height: 50,
          backgroundColor: "#22C55E",
          fontSize: 13,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        COMPRAR E PAGAR NO PIX
      </div>
    </div>
  );
}

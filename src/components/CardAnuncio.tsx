interface Descriptions {
  titulo: string;
  descricao: string;
  valor: string;
  condição?: string;
}

export default function CardAnuncio({
  imagem,
  descriptions,
  nome,
}: {
  imagem: string;
  descriptions: Descriptions;
  nome: string;
}) {
  return (
    <div
      className="card-anuncio"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        height: "369px",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        className="card-anuncio-img"
        style={{
          width: "100%",
          height: "195px",
          backgroundImage: `url(${require(`../icons/png/SacoRacao.png`)})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
      </div>
      <div
        className="card-anuncio-descriptions"
        style={{ padding: "10px", fontFamily: "Inter" }}
      >
        <div
          className="titulo"
          style={{
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            color: "#4E4E4E",
          }}
        >
          {descriptions.titulo}
        </div>
        <div
          className="descricao"
          style={{
            margin: "14px 0 16px 0",
            fontSize: "12px",
            fontStyle: "normal",
            color: "#707070",
            marginTop: "16px",
          }}
        >
          {descriptions.descricao}
        </div>
        <div
          className="valor-condicao"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            className="valor"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
              color: "#414141",
            }}
          >
            R$ {descriptions.valor}
          </div>
          <div
            className="condicao"
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              color: "#F23838",
            }}
          >
            {descriptions.condição ?? ""}
          </div>
        </div>
      </div>
      <div
        className="card-anuncio-name"
        style={{
          height: 20,
          padding: "4px 0 4px 6px",
          backgroundColor: "#414141",
        }}
      >
        <span
          className="name"
          style={{
            fontSize: "10px",
            color: "#FFFFFF",
          }}
        >
          {nome}
        </span>
      </div>
      <div
        className="card-anuncio-wpp"
        style={{
          backgroundColor: "#00BA46",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 45,
          gap: 4,
        }}
      >
        <img src={require("../icons/png/Whatsapp.png")} alt="ícone whatsapp" />
        <span
          className="span-whatsapp"
          style={{
            fontSize: "10px",
            color: "#FFFFFF",
          }}
        >
          DIRETO COM VENDEDOR
        </span>
      </div>
    </div>
  );
}
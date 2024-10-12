import { CardAnuncioStyled } from "./index.styled";

interface Descriptions {
  titulo?: string;
  descricao: string;
  valor: string;
  condicao?: string;
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
    <CardAnuncioStyled>
      <div
        className="card-anuncio-img"
        style={{ backgroundImage: `url(${imagem})` }}
      ></div>
      <div className="card-anuncio-name">
        <span className="name">{nome}</span>
      </div>
      <div className="card-anuncio-descriptions">
        <div className="content">
          <div className="descricao">{descriptions.descricao}</div>
          <div className="valor">R$ {descriptions.valor}</div>
          <div className="condicao">{descriptions.condicao ?? ""}</div>
        </div>
      </div>
      <div className="card-anuncio-cupom">
        <div className="cupom">
          <div className="content">
            <div className="cupom-span">
              <span>USAR CUPOM</span>
            </div>
            <div className="cupom-img">
              <img
                src={require("../../icons/png/Ticket_3.png")}
                alt="ícone ticket"
              />
            </div>
          </div>
        </div>
        <div className="cupom-valor">
          <div className="content">
            <div className="cifrao">R$</div>
            <div className="valor">{descriptions.valor}</div>
          </div>
        </div>
      </div>
    </CardAnuncioStyled>
  );
}

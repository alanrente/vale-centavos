import { background, fontColor, globalColors } from "../../styles/global.style";
import {
  BaseStyled,
  ChildrenBase,
  DivValor,
  NumbersValor,
  PrecoFlutuante,
  SpanValor,
  ContainerImage,
  SpanComerciante,
  DescriptionContent,
  CompreAgora,
} from "./index.styled";

interface Descriptions {
  valor: string;
  titulo?: string;
  descricao?: string;
  valorCupom: string;
  qtdCupom: string;
  valorAntigo: string;
}

interface CardCupomProps {
  imagem?: any;
  nome: string;
  descriptions: Descriptions;
  colorPreco?: string;
  condicao?: string;
}

export default function CardCupom({
  imagem,
  descriptions,
  nome,
  colorPreco,
}: CardCupomProps) {
  return (
    <BaseStyled>
      {imagem && (
        <ChildrenBase>
          <ContainerImage>
            <PrecoFlutuante color={colorPreco}>
              <span>{descriptions.valor}</span>
            </PrecoFlutuante>

            <img
              src={imagem}
              style={{ height: "100%", width: "100%" }}
              alt={nome}
            />
          </ContainerImage>
        </ChildrenBase>
      )}
      <SpanComerciante>{nome}</SpanComerciante>
      {descriptions.titulo && (
        <DescriptionContent style={{ height: 96 }}>
          <div
            style={{
              color: globalColors.black,
              fontWeight: "bold",
            }}
          >
            {descriptions.titulo}
          </div>
          <div
            style={{
              color: globalColors.silver,
            }}
          >
            {descriptions.descricao}
          </div>
          <div
            style={{
              fontSize: "70%",
              color: globalColors.red,
            }}
          >
            De:
            <span
              style={{
                textDecoration: "line-through",
              }}
            >
              {descriptions.valorAntigo}
            </span>
          </div>
        </DescriptionContent>
      )}
      <ChildrenBase
        style={{
          height: "18%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <DivValor
          style={{
            ...fontColor.white,
            backgroundColor: colorPreco || globalColors.green,
            width: "35%",
          }}
        >
          <div>
            <SpanValor>POR</SpanValor>
          </div>
          <NumbersValor>{descriptions.valor}</NumbersValor>
          <div>
            <SpanValor>REAIS</SpanValor>
          </div>
        </DivValor>
        <DivValor
          style={{
            width: "35%",
            ...background.white,
            ...fontColor.black,
          }}
        >
          <div>
            <SpanValor>USAR CUPOM</SpanValor>
          </div>
          <NumbersValor>{descriptions.valorCupom}</NumbersValor>
          <div>
            <SpanValor>CENTAVOS</SpanValor>
          </div>
        </DivValor>
        <DivValor
          style={{
            width: "30%",
            backgroundColor: globalColors.silver,
            color: globalColors.white,
          }}
        >
          <div>
            <SpanValor>SÓ TEM</SpanValor>
          </div>
          <NumbersValor>{descriptions.qtdCupom}</NumbersValor>
          <div>
            <SpanValor>CUPOM</SpanValor>
          </div>
        </DivValor>
      </ChildrenBase>
      <CompreAgora style={{
        height: "10%",
      }}>COMPRE AGORA</CompreAgora>
    </BaseStyled>
  );
}

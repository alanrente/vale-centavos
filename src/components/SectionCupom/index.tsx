import { globalColors } from "../../styles/global.style";
import {
  Base,
  CompreAgora,
  DescriptionContent,
  DivValor,
  NumbersValor,
  SpanComerciante,
  SpanValor,
  ValoresStyled,
} from "./index.styled";

interface SectionCupomProps {
  nome: string;
  titulo?: string;
  descricao?: string;
  valor: string;
  valorCupom: string;
  qtdCupom: string;
  valorAntigo: string;
  colorPreco?: string;
}

export function SectionCupom({
  nome,
  qtdCupom,
  titulo,
  descricao,
  valor,
  valorCupom,
  valorAntigo,
  colorPreco,
}: SectionCupomProps) {
  return (
    <Base hasTitle={!!titulo}>
      <SpanComerciante>{nome}</SpanComerciante>
      {titulo && (
        <DescriptionContent style={{ height: 96 }}>
          <div
            style={{
              color: globalColors.black,
              fontWeight: "bold",
            }}
          >
            {titulo}
          </div>
          <div
            style={{
              color: globalColors.silver,
            }}
          >
            {descricao}
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
              {valorAntigo}
            </span>
          </div>
        </DescriptionContent>
      )}
      <ValoresStyled>
        <DivValor
          style={{
            color: globalColors.white,
            backgroundColor: colorPreco || globalColors.green,
            width: "35%",
          }}
        >
          <SpanValor>POR</SpanValor>
          <NumbersValor>{valor}</NumbersValor>
          <SpanValor>REAIS</SpanValor>
        </DivValor>
        <DivValor
          style={{
            width: "35%",
            backgroundColor: globalColors.white,
            color: globalColors.black,
          }}
        >
          <SpanValor>USAR CUPOM</SpanValor>
          <NumbersValor>{valorCupom}</NumbersValor>
          <SpanValor>CENTAVOS</SpanValor>
        </DivValor>
        <DivValor
          style={{
            width: "30%",
            backgroundColor: globalColors.silver,
            color: globalColors.white,
          }}
        >
          <SpanValor>SÓ TEM</SpanValor>
          <NumbersValor>{qtdCupom}</NumbersValor>
          <SpanValor>CUPOM</SpanValor>
        </DivValor>
      </ValoresStyled>
      <CompreAgora>COMPRE AGORA</CompreAgora>
    </Base>
  );
}

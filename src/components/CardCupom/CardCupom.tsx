import { SectionCupom } from "../SectionCupom";
import {
  BaseStyled,
  ChildrenBase,
  PrecoFlutuante,
  ContainerImage,
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
      <SectionCupom {...{ nome, colorPreco,
        descricao: descriptions.descricao,
        titulo: descriptions.titulo,
        valor: descriptions.valor,
        valorCupom: descriptions.valorCupom,
        valorAntigo: descriptions.valorAntigo,
        qtdCupom: descriptions.qtdCupom,

       }} />
    </BaseStyled>
  );
}

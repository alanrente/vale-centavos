import { TaxaAtivacaoStyled } from "./index.styled";

export default function TaxaAtivacao({ valor }: { valor: string }) {
  return (
    <TaxaAtivacaoStyled>
      <span className="descricao">taxa de ativação: R$</span>
      <span className="valor">{valor}</span>
    </TaxaAtivacaoStyled>
  );
}

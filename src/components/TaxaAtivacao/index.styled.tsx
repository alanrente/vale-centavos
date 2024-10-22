import styled from "styled-components";
import { AlingItemsCenterStyled, DispleyFlexStyled, globalColors, JustifyContentSpaceBetweenStyled } from "../../styles/global.style";

export const TaxaAtivacaoStyled = styled.div`
  ${DispleyFlexStyled}
  ${JustifyContentSpaceBetweenStyled}
  ${AlingItemsCenterStyled}
  
  height: 56px;
  width: 100%;
  background-color: ${globalColors.greenLightDark};;
  font-weight: 700;

  .descricao {
    text-transform: uppercase;
    color: ${globalColors.white} !important;
    margin-left: 12px;
  }

  .valor {
    margin-right: 12px;
    font-size: 30px;
    color: ${globalColors.yellow};
  }
`;
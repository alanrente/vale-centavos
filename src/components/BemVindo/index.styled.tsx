import styled from "styled-components";
import {
  AlingItemsCenterStyled,
  AlingItemsStartStyled,
  DispleyFlexStyled,
  FlexDirectionColumnStyled,
  globalColors,
  JustifyContentCenterStyled,
} from "../../styles/global.style";

export const BemVindoStyled = styled.div`
  ${DispleyFlexStyled}
  ${FlexDirectionColumnStyled}
  ${JustifyContentCenterStyled}
  ${AlingItemsCenterStyled}

  
  width: 90%;
  max-width: 500px;
  gap: 20px;

  .divider {
    height: 2px;
    background-color: ${globalColors.silverLightDark};
  }
`;

export const ContainerStyled = styled(BemVindoStyled)`
  ${AlingItemsStartStyled}
  gap: 2rem;
  margin-bottom: 2rem;

  .descricao {
    font-size: 12px;
    color: ${globalColors.black};
    line-height: 1.7;
  }

  .descricao span {
    font-size: 20px;
  }

  .descricao span:nth-child(2) {
    font-weight: bold;
  }

  .wpp {
    font-size: 12px !important;
    color: ${globalColors.green};
  }

  .funcionalidades {
    font-size: 14px;
    line-height: 1.8;
  }

  .funcionalidades-itens {
    ${DispleyFlexStyled}
    ${FlexDirectionColumnStyled}
    gap: 20px;
    margin: 0 0 2rem 0;
  }
  
  .funcionalidades-item {
    height: 15px;
    display: flex;
    align-items: start;
    gap: 5px;
  }

  .comecar {
    font-size: 14px;
    color: ${globalColors.silver};
    gap: 10px;
  }

  .vamos-comecar {
    font-weight: bold;
  }

  .clique-aqui {
    font-weight: bold;
    color: ${globalColors.green};
    text-decoration: underline;
  }
`;

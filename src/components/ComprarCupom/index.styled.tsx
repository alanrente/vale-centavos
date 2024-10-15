import styled from "styled-components";
import { globalColors } from "../../styles/global.style";

export const ComprarCupomStyled = styled.div`
  --widthTotal: 100%;
  --fontExtraBig: 25px;
  --fontBig: 20px;
  --fontNormal: 14px;
  --fontSmall: 12px;
  --fontSmaller: 10px;

  width: 90%;
  max-width: 800px;
  /* background-color: #f6f600; */
  display: flex;
  flex-direction: column;
  align-items: center;

  .text-silver {
    color: ${globalColors.silver};
  }
  .text-black {
    color: ${globalColors.blackDark};
  }
`;

export const DividerStyled = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${globalColors.silver};
`;

export const SectionCupomStyled = styled(ComprarCupomStyled)`
  /* background-color: #f60000; */
  margin: 0.8rem 0;
  gap: 10px;

  .usuario {
    width: var(--widthTotal);
    font-weight: 600;
    font-size: var(--fontBig);
  }

  .saldo {
    width: var(--widthTotal);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .saldo-text {
    font-size: var(--fontSmall);
  }

  .saldo-valor {
    color: ${globalColors.green};
    font-size: 18px;
    font-weight: 600;
  }
`;

export const SectionDadosStyled = styled(ComprarCupomStyled)`
  /* background-color: #729747; */
  align-items: flex-start;
  font-size: var(--fontNormal);
  gap: 10px;
  margin-bottom: 1rem;
  
  .cupom {
    font-weight: 600;
  }
  
  .subscription {
    font-size: var(--fontSmall);
  }
  
  .de-por {
    font-size: var(--fontSmall);
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .de-por span:first-child {
    text-decoration: line-through;
    color: ${globalColors.red};
  }
  
  .de-por span:last-child {
    font-weight: 600;
    color: ${globalColors.silver};
  }

  .validade {
    font-size: var(--fontSmall);
    color: ${globalColors.red};
  }
`;

export const SectionCuponsStyled = styled(ComprarCupomStyled)`
  font-size: var(--fontExtraBig);
  font-weight: 600;
  margin: 5px 0;
  color: ${globalColors.blue};
`;

export const SectionPagamentoStyled = styled(ComprarCupomStyled)`
  /* background-color: #357949; */
  margin: 1rem 0;
  gap: 1rem;

  label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .valor-quantidade {
    /* background-color: #464e97; */
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    font-size: var(--fontSmaller);
    color: ${globalColors.silver};
  }

  .com-fonte-big {
    font-size: var(--fontBig);
  }

  .item-align-center {
    align-items: center;
  }

  .item-between {
    justify-content: space-between;
  }

  .com-fonte-small {
    font-size: var(--fontSmall);
  }

  .context-green {
    color: ${globalColors.green};
    border: 3px solid ${globalColors.green};
  }

  .context-silver {
    color: ${globalColors.silver};
    border: 3px solid ${globalColors.silver};
  }

  .context-black {
    color: ${globalColors.black};
    border: 3px solid ${globalColors.black};
  }

  .context-purple {
    color: ${globalColors.purple};
    border: 3px solid ${globalColors.purple};
  }

  .default {
    border-radius: 5px;
    width: 100%;
    font-weight: 600;
    padding: 0;
  }
  
  .item-height {
    height: 44px;
  }
  
  .text-white {
    color: ${globalColors.white};
  }

  .clicked {
    cursor: pointer;
  }

  .item-centered {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .item-radius {
    border-radius: 5px;
  }

  .item-bordered {
    border: 3px solid;
    width: calc(100% - 6px);
  }

  .qtd {
    width: 18% !important;
  }

  .preco {
    width: 30% !important;
    text-align: end;
  }

  .com-valor {
    display: flex;
    flex-direction: row;
    width: 85%;
    justify-content: space-between;
  }

  .fundo-verde {
    background-color: ${globalColors.green};
  }

  .fundo-cinza {
    background-color: ${globalColors.silver};
  }

  .fundo-preto {
    background-color: ${globalColors.black};
  }

  .fundo-roxo {
    background-color: ${globalColors.purple};
  }

`;

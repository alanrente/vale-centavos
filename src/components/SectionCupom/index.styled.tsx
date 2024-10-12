import styled from "styled-components";
import { globalColors } from "../../styles/global.style";

export const Base = styled.div<{ hasTitle: boolean }>`
  --heigthNome: ${({ hasTitle }) => (hasTitle ? "12%" : "18%")};
  --heightDescription: ${({ hasTitle }) => (hasTitle ? "45%" : "0")};
  --heigthValor: ${({ hasTitle }) => (hasTitle ? "28%" : "58%")};
  --heigthCompreAgora: ${({ hasTitle }) => (hasTitle ? "15%" : "24%")};

  width: 100%;
  height: ${({ hasTitle }) => (hasTitle ? "250px" : "150px")};
`;

export const SpanComerciante = styled.span`
  color: ${globalColors["white"]};
  background-color: ${globalColors["black"]};
  height: var(--heigthNome);
  display: flex;
  padding: 0 10px;
  overflow: hidden;
  align-items: center;
  font-size: 10px;
`;

export const ValoresStyled = styled.div`
  height: var(--heigthValor);
  display: flex;
  flex-direction: row;
`;

export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(var(--heightDescription));
  width: 100%;
  justify-content: space-between;
  padding: 10px 5px;
`;

export const DivValor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SpanValor = styled.span`
  font-size: 10px;
  font-weight: 600;
  text-align: start;
  /* background-color: blue; */
`;

export const NumbersValor = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const CompreAgora = styled.div`
  background-color: ${globalColors.black};
  height: var(--heigthCompreAgora);
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 0 0 5px 5px; */
  color: ${globalColors.white};
`;

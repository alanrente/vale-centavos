import styled from "styled-components";
import { globalColors } from "../../styles/global.style";

export const BaseStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${globalColors["silverLightDark"]};
  border-radius: 10px;
  width: 270px;
  overflow: hidden;
  background: ${globalColors.white};
`;

export const ContainerImage = styled.div`
  height: 170px;
  position: relative;
`;

export const SpanComerciante = styled.span`
  color: ${globalColors["white"]};
  background-color: ${globalColors["black"]};
  height: 25px;
  display: flex;
  padding: 0 10px;
  overflow: hidden;
  align-items: center;
  font-size: 10px;
`;

export const PrecoFlutuante = styled.div<{ color?: string }>`
  font-size: 18px;
  width: 80px;
  height: 32px;
  z-index: 999;
  font-weight: bold;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 14px;
  left: 13px;
  border-radius: 5px;
  color: ${globalColors.white};
  background-color: ${({ color }) => color || globalColors.green};
`;

export const ChildrenBase = styled.div`
  width: 100%;
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
`;

export const NumbersValor = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  margin: 10px 5px;
`;

export const CompreAgora = styled(ChildrenBase)`
  background-color: ${globalColors.black};
  height: 40px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 0 0 5px 5px; */
  color: ${globalColors.white};
`;

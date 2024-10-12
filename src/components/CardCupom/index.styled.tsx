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


export const PrecoFlutuante = styled.div<{ color?: string }>`
  font-size: 18px;
  width: 80px;
  height: 32px;
  z-index: 99;
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
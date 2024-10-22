import { CSSProperties } from "react";
import { css } from "styled-components";

export const globalColors = {
  blue: "#1B63A2",
  blackDark: "#000000",
  black: "#414141",
  silver: "#707070",
  silverLight: "#d4d4d4",
  silverLightDark: "#A7A7A7",
  white: "#FFFFFF",
  green: "#22C55E",
  greenLightDark: "#00BA46",
  greenLightSea: "#1BA2A0",
  yellow: "#FFF701",
  yellowDark: "#D19D07",
  brown: "#723A12",
  red: "#F65050",
  purple: "#963095",
};

export const background: {
  black: CSSProperties;
  silver: CSSProperties;
  white: CSSProperties;
  green: CSSProperties;
  yellow: CSSProperties;
  yellowDark: CSSProperties;
  brown: CSSProperties;
} = {
  black: {
    backgroundColor: "#414141",
  },
  silver: {
    backgroundColor: "#707070",
  },
  white: {
    backgroundColor: "#FFFFFF",
  },
  green: {
    backgroundColor: "#22C55E",
  },
  yellow: {
    backgroundColor: "#FFF701",
  },
  yellowDark: {
    backgroundColor: "#D19D07",
  },
  brown: {
    backgroundColor: "#723A12",
  },
};

export const fontColor: {
  white: CSSProperties;
  black: CSSProperties;
  silver: CSSProperties;
  red: CSSProperties;
  silverLight: CSSProperties;
} = {
  red: {
    color: "#F65050",
  },
  white: {
    color: "#FFFFFF",
  },
  black: {
    color: "#414141",
  },
  silver: {
    color: "#707070",
  },
  silverLight: {
    color: "#A7A7A7",
  },
};

export const DispleyFlexStyled = css`
  display: flex;
`;

export const FlexDirectionColumnStyled = css`
  flex-direction: column;
`;

export const FlexDirectionRowStyled = css`
  flex-direction: row;
`;

export const JustifyContentCenterStyled = css`
  justify-content: center;
`;

export const JustifyContentStartStyled = css`
  justify-content: start;
`;

export const JustifyContentEndStyled = css`
  justify-content: end;
`;

export const JustifyContentSpaceBetweenStyled = css`
  justify-content: space-between;
`;

export const AlingItemsCenterStyled = css`
  align-items: center;
`;

export const AlingItemsStartStyled = css`
  align-items: start;
`;

export const AlingItemsEndStyled = css`
  align-items: end;
`;
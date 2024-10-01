import { CSSProperties } from "react";

export const globalColors = {
  black: "#414141",
  silver: "#707070",
  silverLight: "#d4d4d4",
  silverLightDark: "#A7A7A7",
  white: "#FFFFFF",
  green: "#22C55E",
  greenLightDark: "#00BA46",
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

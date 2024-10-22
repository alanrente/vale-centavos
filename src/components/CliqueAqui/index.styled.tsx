import styled from "styled-components";
import { globalColors } from "../../styles/global.style";

export const CliqueAquiStyled = styled.span<{ color?: string }>`
  font-weight: bold;
  color: ${(props) => props.color || globalColors.green};
  text-decoration: underline;
`;

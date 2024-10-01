import styled from "styled-components";
import { SectionScrollHorizontalProps } from "./index.interface";

export const SectionScrollHorizontalStyled = styled.div<SectionScrollHorizontalProps>`
  height: 84%;
  width: 100%;
  position: absolute;
  bottom: 0;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.gap || "10px"};
  flex-wrap: nowrap;
  white-space: nowrap;
  background-color: transparent;
  scrollbar-width: none;

  @media (min-width: 1200px) {
    gap: 5vw;
  }
`;

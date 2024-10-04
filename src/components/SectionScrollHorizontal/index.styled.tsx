import styled from "styled-components";
import { SectionScrollHorizontalProps } from "./index.interface";

export const SectionScrollHorizontalStyled = styled.div<SectionScrollHorizontalProps>`
  height: 100%;
  width: 100%;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap || "10px"};
  flex-wrap: nowrap;
  white-space: nowrap;
  background-color: transparent;
  scrollbar-width: none;
  & > * {
    flex: 0 0 auto;
  }

  @media (min-width: 1200px) {
    gap: 5vw;
  }
`;

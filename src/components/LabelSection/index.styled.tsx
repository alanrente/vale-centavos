import styled from "styled-components";
import { globalColors } from "../../styles/global.style";

export const LabelSectionStyled = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 4px solid ${({ color }) => color || globalColors.silver};
  margin-bottom: 1rem;

  .header-content {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 0.5rem;
    height: 100%;
    text-align: start;
    margin-left: 0.8rem;
    margin-bottom: 0.8rem;
    /* background-color: #c7b7b7; */
  }

  .header-title {
    height: 100%;
    color: ${({ color }) => color || globalColors.silver};
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .header-description {
    color: ${globalColors.silver};
    font-size: 0.8rem;
    height: 100%;
    font-weight: 500;
  }
`;

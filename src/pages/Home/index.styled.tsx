import styled from "styled-components";
import { globalColors } from "../../styles/global.style";

export const MarketPlace = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 80vh;

  .header {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 4px solid ${globalColors.purple};
  }

  .header-content {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: .5rem;
    height: 100%;
    text-align: start;
    margin-left: .8rem;
    margin-bottom: .8rem;
    /* background-color: #c7b7b7; */
  }
  
  .header-title {
    height: 100%;
    color: ${globalColors.purple};
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .header-description {
    color: ${globalColors.silver};
    font-size: 0.8rem;
    height: 100%;
    font-weight: 500;
  }

  .categorias {
    display: flex;
    flex-direction: row;
    position: relative;
    margin-top: .5vh;
    margin-bottom: 1rem;
    width: 92%;
    height: 12vh;
    /* background-color: #ac5757b0; */
  }
`;

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

  .anuncios {
    background: url(${require("../../icons/png/BackgroundMarketPlace.png")});  
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 52vh;
    max-height: 500px;

    @media (min-width: 600px) {
      width: 600px;
    }
  }

  .anuncios-section {
    width: 86%;
    height: 86%;
    /* border: 2px solid ${globalColors.purple}; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: #5a758dc8; */
  }

  .anuncios-card {
    gap: 2.8rem;
  }
  
  .anuncios-section-cards {
    width: 100%;
    height: 92%;
    /* background-color: #619146c7; */
  }

  .anuncios-section-ver-mais {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    height: 8%;
    background-color: ${globalColors.black};
    color: ${globalColors.white};
  }

  .anuncios-section-ver-mais span {
    margin-right: 1rem;
    font-size: .8rem;
  }
`;

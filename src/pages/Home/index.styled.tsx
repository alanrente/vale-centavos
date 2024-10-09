import styled from "styled-components";
import { globalColors } from "../../styles/global.style";

export const PageStyled = styled.div`
  justify-content: space-between;
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: center;
`;

export const SectionStyled = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: center;
  width: 95%;
`;

export const MarketPlace = styled(SectionStyled)`
  height: 80vh;

  .categorias {
    display: flex;
    flex-direction: row;
    position: relative;
    margin-top: 0.5vh;
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
    font-size: 0.8rem;
  }
`;

export const MaisFood = styled(SectionStyled)`
  gap: 2.8rem;
`;

export const VerMaisStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  height: 8%;
  background-color: ${globalColors.black};
  color: ${globalColors.white};
`;

export const VerMaisSpan = styled(VerMaisStyled).attrs({ as: "span" })`
  margin: 8px 1rem 8px 0;
  font-size: 0.8rem;
`;

export const AnunciosDoBairroStyled = styled(SectionStyled)``;

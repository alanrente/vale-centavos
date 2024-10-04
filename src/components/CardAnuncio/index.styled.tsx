import styled from "styled-components";
import { globalColors } from "../../styles/global.style";

export const CardAnuncioStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  width: 44%;
  /* max-width: 350px; */
  /* max-height: 400px; */
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: #ffffff;

  .card-anuncio-img {
    width: 100%;
    height: 50%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .card-anuncio-name {
    height: 8%;
    width: 100%;
    background-color: #414141;

    .name {
      margin-left: 0.6rem;
      font-size: 10px;
      color: #ffffff;
      overflow-x: hidden;
    }
  }

  .card-anuncio-descriptions {
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    .content {
      height: 86%;
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      /* background-color: #753333; */
      
      .descricao {
        height: 50%;
        font-size: 14px;
        white-space: pre-wrap;
        font-style: normal;
        color: ${globalColors.black};
      }
      
      .valor {
        font-weight: 700;
        font-size: 14px;
        color: ${globalColors.blackDark};
      }
      
      .condicao {
        align-self: end;
        font-size: 10px;
        font-weight: 700;
        color: ${globalColors.red};
      }
    }

  }

  .card-anuncio-cupom {
    display: flex;
    flex-direction: row;
    height: 13%;
    width: 100%;

    .cupom {
      width: 50%;
      background-color: ${globalColors.blackDark};
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .content {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 86%;

        .cupom-span {
          color: ${globalColors.white};
          white-space: wrap;
          font-size: 9px;
          font-weight: 400;
          /* background-color: #a571718f; */
        }

        .cupom-img {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        img {
          width: 28px;
          height: 18px;
        }
      }
    }
    .cupom-valor {
      width: 50%;
      background-color: ${globalColors.purple};
      color: ${globalColors.white};

      .content {
        display: flex;
        flex-direction: row;
        align-items: end;
        justify-content: center;
        height: 80%;
        /* width: 86%; */
        gap: 0.25rem;
        /* background-color: #414141; */

        .cifrao {
          font-size: 14px;
          font-weight: 300;
        }

        .valor {
          font-size: 20px;
        }
      }
    }
  }
`;

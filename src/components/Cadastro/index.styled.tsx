import { Form } from "antd";
import styled from "styled-components";
import { globalColors } from "../../styles/global.style";

export const FormAntdStyled = styled(Form)`
  max-width: 600px;
  width: 80%;

  .ant-input {
    border: 2px solid ${globalColors.silverLightDark};
    border-radius: 5px;
  }

  .ant-input:hover {
    border-color: ${globalColors.green};
    border-width: 2px;
  }

  .ant-input:focus {
    border-color: ${globalColors.green};
    border-width: 2px;
  }

  .container-celular {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    /* background-color: #663333; */
  }

  .btn-cadastro {
    width: 100%;
    background-color: ${globalColors.greenLightDark};
    font-weight: 600;
  }

  .btn-background-black {
    background-color: ${globalColors.blackDark};
  }
`;

export const CadastroStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 1.5rem 0;

  a {
    font-weight: 600;
    // texto sublinhado
    text-decoration: underline;
    color: ${globalColors.greenLightDark};
  }

  .text {
    color: ${globalColors.silver};
  }

  .titulo {
    width: 80%;
    text-align: center;
    color: ${globalColors.black};
    margin: 1rem 0;
  }

  .subtitle {
    width: 65%;
    color: ${globalColors.silver};
    margin: 0 0 2rem 0;
  }

  .validar {
    text-align: center;
    margin: 5rem 0;
  }
`;

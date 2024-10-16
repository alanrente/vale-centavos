import { Form } from "antd";
import styled from "styled-components";
import { globalColors } from "../../styles/global.style";

export const FormAntdStyled = styled(Form)`
  .ant-input {
    border: 2px solid ${globalColors.silverLightDark};
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
    width: 100%;
  }

  .btn-cadastro {
    width: 100%;
    background-color: ${globalColors.greenLightDark};
    font-weight: 600;
  }
  `;

export const CadastroStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  a {
    font-weight: 600;
    // texto sublinhado
    text-decoration: underline;
    color: ${globalColors.greenLightDark};
  }

  .text {
    color: ${globalColors.silver}
  }
`;

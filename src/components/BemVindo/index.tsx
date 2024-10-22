import { Typography } from "antd";
import { BemVindoStyled, ContainerStyled } from "./index.styled";
import { DividerStyled } from "../ComprarCupom/index.styled";
import { IoMdCheckmark } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";

import TaxaAtivacao from "../TaxaAtivacao";
import { globalColors } from "../../styles/global.style";
import CliqueAqui from "../CliqueAqui";
import { useNavigate } from "react-router-dom";

export default function BemVindo({ nome }: { nome: string }) {
  const navigate = useNavigate();

  return (
    <BemVindoStyled>
      <ContainerStyled>
        <Typography.Text className="descricao">
          <span className="ola">Olá</span>
          <span> {nome},</span>
          <br />
          Estamos felizes em saber que você é +1 morador e/ou visitante do
          bairro que apoia e valoriza nosso comércio local.
        </Typography.Text>
        <TaxaAtivacao valor={"5,00"} />
      </ContainerStyled>
      <DividerStyled className="divider" />
      <ContainerStyled
        style={{
          marginBottom: 0,
        }}
      >
        <Typography.Text className="descricao">
          Fique tranquilo(a), nossa equipe te auxilia caso você tenha dúvidas
          através do nosso suporte no
          <span className="wpp">
            {" "}
            <strong>WhatsApp</strong> (22)997763246.
          </span>
        </Typography.Text>
      </ContainerStyled>
      <DividerStyled className="divider" />
      <ContainerStyled className="funcionalidades-itens">
        <div className="funcionalidades-itens">
          <Typography.Title className="descricao funcionalidades">
            Funcionalidades que você encontra na plataforma:
          </Typography.Title>
          <div className="descricao funcionalidades-item">
            <IoMdCheckmark size={20} fill={globalColors.greenLightDark} />{" "}
            Compra de cupom de desconto
          </div>
          <div className="descricao funcionalidades-item">
            <IoMdCheckmark size={20} fill={globalColors.greenLightDark} />{" "}
            Plataforma de anúncios
          </div>
          <div className="descricao funcionalidades-item">
            <IoMdCheckmark size={20} fill={globalColors.greenLightDark} />
            Acompanhamento das compras
          </div>
          <div className="descricao funcionalidades-item">
            <IoMdCheckmark size={20} fill={globalColors.greenLightDark} />
            Consulta para validar a vigência do cupom
          </div>
          <div className="descricao funcionalidades-item">
            <IoMdCheckmark size={20} fill={globalColors.greenLightDark} />
            Página de detalhe do produto ou serviço
          </div>
          <div className="descricao funcionalidades-item">
            <IoMdCheckmark size={20} fill={globalColors.greenLightDark} />
            Pagina do Comerciante (Mapa e telefone)
          </div>
          <div className="descricao funcionalidades-item">
            <IoMdCheckmark size={20} fill={globalColors.greenLightDark} />
            Fale direto com o comerciante
          </div>
          <div className="descricao funcionalidades-item">
            <IoMdCheckmark size={20} fill={globalColors.greenLightDark} />
            Toda transação deverá ser feita por PIX
          </div>
          <div className="descricao funcionalidades-item">
            <IoMdCheckmark size={20} fill={globalColors.greenLightDark} />O
            anúncio é seu, a responsabilidade também
          </div>
          <div className="descricao funcionalidades-item">
            <IoMdCheckmark size={20} fill={globalColors.greenLightDark} />
            Plataforma de apoio e valorização do comércio local do seu bairro.
          </div>
        </div>
      </ContainerStyled>
      <DividerStyled className="divider" />
      <ContainerStyled>
        <div className="funcionalidades-item comecar">
          <FaAngleRight size={30} color={globalColors.silver} />
          <span>
            <span className="vamos-comecar">Vamos começar?</span>
            <br />
            <CliqueAqui onclick={() => {
              navigate("/login?view=login");
            }} />{" "}
            para se logar na plataforma.
          </span>
        </div>
      </ContainerStyled>
    </BemVindoStyled>
  );
}

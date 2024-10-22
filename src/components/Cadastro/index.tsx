import { Button, Form, Input, Select, Typography } from "antd";
import { CadastroStyled, FormAntdStyled } from "./index.styled";
import { useEffect, useState } from "react";
import { EView } from "../../interfaces/page.interface";
import { Link, useNavigate, useSearchParams } from "react-router-dom";


interface CadastrarProps {
  // nome: string;
  // email: string;
  // senha: string;
  // celular: string;
  view?: EView;
}

export default function Cadastro() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const view = searchParams.get("view") as EView;
  const [form] = Form.useForm();
  const [titulo] = useState({
    cadastro: "Preencha seus dados corretamente",
    login: "Acesse sua conta",
    recuperar: "Esqueceu sua senha?",
    validar: "Seu código de ativação foi enviado por e-mail",
    redefinir: "Redefina sua senha?",
  });

  const [subTitulo] = useState({
    recuperar:
      "Digite o seu email e nós lhe enviaremos um link para a redefinição da senha.",
    redefinir:
      "Escolha uma senha forte, com no mínimo 8 dígitos, conter um caractere especial e uma letra maiúscula, misturando letras e números.",
  });

  const [btnText] = useState({
    cadastro: "CADASTRAR",
    login: "ENTRAR",
    validar: "ATIVAR CÓDIGO",
    recuperar: "RECUPERAR SENHA",
    redefinir: "SALVAR NOVA SENHA",
  });

  useEffect(() => {
    const view = searchParams.get("view");
    if (!view) {
      navigate("/login?view=login");
    }

    form.resetFields();
  }, []);

  return (
    <CadastroStyled>
      <Typography.Title level={3} className="titulo">
        {titulo[view]}
      </Typography.Title>
      {[EView.validar].includes(view) && (
        <FormAntdStyled className="validar" form={form}>
          <Input.OTP length={5} />
        </FormAntdStyled>
      )}
      {view === "recuperar" || view === "redefinir" ? (
        <Typography.Text className="titulo subtitle">
          {subTitulo[view]}
        </Typography.Text>
      ) : null}
      <FormAntdStyled layout={"vertical"} form={form} size="large">
        {view === "cadastro" && (
          <Form.Item label="Seu primeiro nome">
            <Input />
          </Form.Item>
        )}
        {[EView.cadastro, EView.login, EView.recuperar].includes(view) && (
          <Form.Item
            label={`${view === "cadastro" ? "Seu melhor e" : "E"}-mail`}
          >
            <Input />
          </Form.Item>
        )}
        {view === "cadastro" && (
          <Form.Item label="Confirme seu melhor e-mail">
            <Input />
          </Form.Item>
        )}

        {[EView.login, EView.cadastro, EView.redefinir].includes(view) && (
          <Form.Item label={`${view === EView.redefinir ? "Nova " : ""}Senha`}>
            <Input type="password" />
          </Form.Item>
        )}
        {[EView.redefinir].includes(view) && (
          <Form.Item label={`Repetir Nova Senha`}>
            <Input type="password" />
          </Form.Item>
        )}
        {view === "cadastro" && (
          <div className="container-celular">
            <Form.Item label="Número do celular">
              <Select
                defaultValue="BR +55"
                style={{ width: "96px" }}
                disabled
              />
            </Form.Item>
            <Form.Item label>
              <Input />
            </Form.Item>
          </div>
        )}
        <Form.Item>
          <Button
            type="primary"
            className={`btn-cadastro ${
              view === "cadastro" || view === "login"
                ? ""
                : "btn-background-black"
            }`}
          >
            {btnText[view]}
          </Button>
        </Form.Item>
      </FormAntdStyled>
      {view === EView.cadastro && (
        <Typography.Text className="text">
          Já tem uma conta? <Link to="/login?view=login">Faça seu login!</Link>
        </Typography.Text>
      )}
      {view === EView.login && (
        <>
          <Link to="/login?view=recuperar">Esqueceu sua senha?</Link>
          <Typography.Text className="text">
            Não possui conta?{" "}
            <Link to="/login?view=cadastro">Cadastre-se!</Link>
          </Typography.Text>
        </>
      )}
      {view === EView.validar && (
        <Typography.Text className="text">
          Perdeu seu código?
          <br />
          <Link to="/login?view=validar">Clique aqui </Link>para reenviar para o
          seu e-mail.
        </Typography.Text>
      )}
      {view === EView.recuperar && (
        <Typography.Text className="text">
          <Link to="/login?view=login">Voltar</Link> para tela de login!
        </Typography.Text>
      )}
      {view === EView.redefinir && (
        <Typography.Text className="text">
          Vamos começar? <br />
          <Link to="/login?view=login">Clique aqui </Link>para se logar na
          plataforma.
        </Typography.Text>
      )}
    </CadastroStyled>
  );
}

import { Button, Form, Input, Select, Typography } from "antd";
import { CadastroStyled, FormAntdStyled } from "./index.styled";

export default function Cadastro() {
  const [form] = Form.useForm();

  return (
    <CadastroStyled>
      <FormAntdStyled layout={"vertical"} form={form} size="large">
        <Form.Item label="Seu primeiro nome">
          <Input />
        </Form.Item>
        <Form.Item label="Seu melhor e-mail">
          <Input />
        </Form.Item>
        <Form.Item label="Confirme seu melhor e-mail">
          <Input />
        </Form.Item>
        <Form.Item label="Senha">
          <Input type="password" />
        </Form.Item>
        <div className="container-celular">
          <Form.Item label="Número do celular">
            <Select defaultValue="BR +55" style={{ width: "96px" }} disabled />
          </Form.Item>
          <Form.Item label>
            <Input />
          </Form.Item>
        </div>
        <Form.Item>
          <Button type="primary" className="btn-cadastro">
            CADASTRAR
          </Button>
        </Form.Item>
      </FormAntdStyled>
      <Typography.Text className="text">
        Já tem uma conta? <a href="/#">Faça seu login!</a>
      </Typography.Text>
    </CadastroStyled>
  );
}

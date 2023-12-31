import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button/index";
import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e geranciar seus links úteis.</p>
        <h2>Faça seu login</h2>
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button title="Entrar"></Button>

        <a href="#">Criar conta</a>
      </Form>
      <Background />
    </Container>
  );
}

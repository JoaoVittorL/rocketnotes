import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>
      <Form>
        <Input placeholde="Nome" type="text" icon={FiUser} />
        <Input placeholde="Email" type="text" icon={FiMail} />
        <Input placeholde="Senha atual" type="password" icon={FiLock} />
        <Input placeholde="Nova senha" type="password" icon={FiLock} />
        <Button />
      </Form>
    </Container>
  );
}

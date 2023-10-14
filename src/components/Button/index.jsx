import { Container } from "./styles";

// REST PARA DEFINIR QUE VOU USAR TODOS AS PROPRIEDADE DO COMPONENTE
export function Button({ title, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? "Carregando" : title}
    </Container>
  );
}

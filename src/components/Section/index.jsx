import { Container } from "./styles";
export function Section({title, children}) {
  return ( //title vai ser o título da sessão e o children vai ser o conteúdo da sessão - são propriedades
    <Container>
      <h2>{title}</h2>
      {children} 
    </Container>
  );
}
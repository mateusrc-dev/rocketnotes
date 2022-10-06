import {Container} from './styles'

export function Button({ title, loading = false, ...rest }) { //estamos usando o nosso componente - Container vai possuir configurações css do button
  return( // toda vez que queremos exibir o conteúdo de uma propriedade dentro do return temos que colocar chaves (propriedade nada mais é que uma variável) - se não for passado o valor de loading ele vai ser falso - rest é para incluir todas as propriedades que estiverem na tag Button
  <Container 
    type="button" 
    disabled={loading} 
    {...rest}
  > 
    {loading ? 'Carregando...' : title} 
  </Container>
  ) //usando um ternário em loading, se loading for verdadeiro, vai aparecer a mensagem carregando, ser for falso, vai aparecer a mensagem dentro de title
}
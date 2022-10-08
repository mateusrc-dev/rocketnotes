import {Container} from './styles'

export function Textarea({value, ...rest}) {
  return(//criando o container e passando todas as propriedades restantes, entre as tags passando a propriedade value
    <Container {...rest}> 
      { value }
    </Container>
  )
}
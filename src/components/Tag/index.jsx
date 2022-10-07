import {Container} from './styles'

export function Tag({title, ...rest}) {
  return( //o rest é pra pegar as outras propriedades que vão ser passadas, que no caso são as propriedades da tag (o id)
    <Container {...rest}>
     {title} 
    </Container>
  )
}
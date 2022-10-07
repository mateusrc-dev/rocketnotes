import {Container} from './styles'

export function ButtonText({title, isActive = false,...rest}) { //se a propriedade isActive for passada então será ativado o ButtonText (cor laranja) - o padrão é que caso o valor isActive não seja informado, ele será falso
  return(
    <Container type="button" isActive={isActive} {...rest}>
      {title}
    </Container>
  )
}
import { Container } from './styles';
import {Tag} from '../Tag'

export function Note({data, ...rest}) { //o rest é pra pegar as outras propriedades que vão ser passadas, que no caso são as propriedades da tag
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>

      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag =>  <Tag title={tag.name} key={tag.id}/>)   //o map é para percorrer cada tag - é importante usar uma chave quando estamos trabalhando com listas para identificar que cada elemento é único
          }
        </footer>
      }
    </Container>
  ) //o uso do operador && é porque vamos renderizar as tags somente se elas existirem (é uma condição) - estamos usando um componente Tag que pode receber como propriedade title e qualquer outra propriedade, incluindo key (...rest)
}
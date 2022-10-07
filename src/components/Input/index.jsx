import {Container} from './styles';

export function Input({icon: Icon, ...rest}) { //posso converter o icon para'Icon'  - vamos criar o elemento html como uma div porque vamos receber um ícone como propriedade, as outras propriedades vão ser passadas para o input (o tipo do input, etc...)
  return(
    <Container>
      {Icon && <Icon size={20}/>} 
      <input {...rest}/>
    </Container>
  ) //está sendo usado uma condição no Icon, só vai mostrar o Icon se ele existir
}
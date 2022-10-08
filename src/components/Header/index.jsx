import {RiShutDownLine} from 'react-icons/ri' //importando o ícone - ri é uma biblioteca 
import { Container, Profile, Logout } from './styles'
export function Header(){
  return( //a tag Container contém as configurações css de header, Profile contém configurações css para a imagem e os nomes de usuário e boas vindas, Logout é o componente que contém configurações css para o button
    <Container>
      <Profile  to="/profile">
        <img src="https://github.com/mateusrc-dev.png" alt="Foto do Usuário"/>
        <div>
          <span>Bem vindo!</span>
          <strong>Mateus Carvalho</strong>  
        </div>  
      </Profile>
      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container >
  )
}
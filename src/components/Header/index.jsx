import { useNavigate } from 'react-router-dom'
import { RiShutDownLine } from 'react-icons/ri' //importando o ícone - ri é uma biblioteca 
import { useAuth } from '../../hooks/auth' //importando o useAuth porque ele é um contexto que tem as funcionalidades
import { api } from '../../services/api' //importando para acessar a URL base
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Container, Profile, Logout } from './styles'
export function Header() {
  const { signOut, user } = useAuth() //pegando a funcionalidade que desejamos do useAuth
  const navigate = useNavigate() //inicializando o useNavigate
  function handleSignOut() {
    navigate("/") //levando o usuário para a tela inicial antes de chamar a função que apaga os dados do usuário do localstorage - não vamos conseguir usar o navigate dentro de authprovider porque ele desconhece as rotas - usando no componente, como ele é filho da parte de navegação, então está presente no contexto de navegação as rotas
    signOut()
  }
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder  //se o avatar do usuário existir, vai renderizar o url da imagem do backend, se não, vai renderizar a imagem do 'avatarPlaceholder'
  return ( //a tag Container contém as configurações css de header, Profile contém configurações css para a imagem e os nomes de usuário e boas vindas, Logout é o componente que contém configurações css para o button
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />
        <div>
          <span>Bem vindo!</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={handleSignOut} title="Sair">
        <RiShutDownLine />
      </Logout>
    </Container >
  ) //quando for clicado no onClick vai ser executada a função signOut - estamos colocando o nome do usuário de forma dinâmica, e a foto também, de acordo com a alteração dos dados do usuário compartilhado no contexto de autenticação
}
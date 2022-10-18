import { useState } from 'react' //importando o useState pra guardar estados
import { useAuth } from '../../hooks/auth' //importando o useAuth que tem os dados do usuário autenticado
import { api } from '../../services/api' //importando para acessar a URL base
import avatarPlaceholder from '../../assets/avatar_placeholder.svg' //vamos usar essa imagem quando o usuário não tiver uma foto
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi' //importando as imagens
import { useNavigate } from 'react-router-dom' //o Link do react-router tem uma propriedade chamada 'to'
import { Container, Form, Avatar } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  const { user, updateProfile } = useAuth() //acessando o usuário dentro do nosso contexto de autenticação 
  const [name, setName] = useState(user.name)//sempre colocar os estados no começo da função - o estado inicial vai ser os dados do usuário que foram usados pra entrar na aplicação que estão no contexto de autenticação
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState("") //vamos deixar o password vazio por questão de segurança
  const [passwordNew, setPasswordNew] = useState("")
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder //se o avatar do usuário existir, vai renderizar o url da imagem do backend, se não, vai renderizar a imagem do 'avatarPlaceholder'
  const [avatar, setAvatar] = useState(avatarUrl) //aqui é pra exibir o arquivo - se o usuário já tiver um avatar vai ser inserido no estado inicial
  const [avatarFile, setAvatarFile] = useState(null)//aqui é pra guardar o arquivo selecinado - estado do avatarFile começa como nulo, ou seja, sem avatar
  const navigate = useNavigate()
  function handleBack() {
    //navigate("/") //quando essa função for chamada vamos nevegar para a rota 'home' - com navigate colocando uma rota ficamos empilhando o histórico de navegação
    navigate(-1) //com -1 a gente volta no nosso histórico de navegação em vez de empilhar 
  }
  async function handleUpdate() {
    const updated = { //criando objeto com os dados atualizados
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }
    const userUpdated = Object.assign(user, updated)//Object.assign é uma função que copia valores, combina dois objetos - verifica se tem propriedades iguais em dois objetos e sobrescreve os que forem iguais, combina
    await updateProfile({ user: userUpdated, avatarFile }) //chamando a função que tem a rota que atualiza os dados no backend e passando como parâmetro os dados do usuário dentro de um objeto e o avatar
  }
  function handleChangeAvatar(event) {//essa função recebe event, que é o evento de alteração do avatar que vem da função onChange
    const file = event.target.files[0] //dentro do evento vamos extrair o arquivo (no caso o arquivo na posição 0)
    setAvatarFile(file) //vamos atualizar o estado do avatarFile com o arquivo que o usuário acabou de adicionar
    const imagePreview = URL.createObjectURL(file); //criando uma URL pra atualizar o estado da variável 'avatar' que exibe o avatar
    setAvatar(imagePreview) //atualizando o estado da variável 'avatar' com a URL criada
  }
  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft />
        </button>
      </header>
      <Form>
        <Avatar>
          <img
            src={avatar}
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input //o htmlFor é pra conectar o label com o input através do 'id'
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}//quando o conteúdo desse input mudar, vai atualizar o estado do avatar
            />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name} //passando as informações do usuário no input que estão no estado inicial
          onChange={e => setName(e.target.value)} //colocando a função que atualiza o estado
        />
        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate} /*quando clicar nesse botão vai ser chamada essa função que chama outra função que faz uma requisição put na rota users pra atualizar os dados*/ />
      </Form>
    </Container>
  );
}
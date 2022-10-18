import { useState } from "react" //importando rook que cria um estado
import { api } from "../../services/api"//importando a variável que tem as configurações da api
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom' //o  método Link do react-router tem uma propriedade chamada to
import { Button } from '../../components/Button'
import { Container, Form, Background } from './styles'

export function SignUp() {
  const [name, setName] = useState("") //criando um estado - podemos informar dentro dos parenteses o estado inicial - aqui vai ser um texto vazio já que quando abrimos a interface não tem escrito nada - a função useState entrega duas coisas importantes: o estado pra acessar o valor atual do estado (que vai ser name); função pra atualizar o estado (que vai ser setName)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleSignUp() { //essa função é executada quando o botão Cadastrar é clicado
    if (!name || !password || !email) { //verificando se nome, email e password foi digitado antes de prosseguir o cadastro
      return alert("Preencha todos os campos!") //alert é uma função do próprio JavaScript - o return é pra função parar de ser executada
    }
    api.post("/users", { name, email, password }).then(() => {alert("Usuário cadastrado com sucesso!"); navigate("/")}).catch(error => {if(error.response){alert(error.response.data.message)}else{alert("Não foi possível cadastrar!")}}) //vamos fazer um post em users, a rota que cadastramos o usuário - o then executa se tudo der certo, e catch executa se tudo der errado - no catch vamos usar a mensagem que o próprio backend está mandando (do AppError) - nessa rota users também pode ter outras mensagens de erro do backend, como o email estar em uso... - navigate("/") é para levar o usuário para a tela inicial ao terminar de se cadastrar
  }

  return ( //a função onChange toda vez que o estado muda essa função dispara um evento - podemos capturar ele e chamar ele do que desejarmos ('event', 'e' - variável auxuliar) - podemos usar uma arrow function pra transferir para o setName (função que atualiza o estado) o que tem dentro do 'e' 
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie a sua conta</h2>
        <Input placeholder="Nome" type="text" icon={FiUser} onChange={e => setName(e.target.value)} />
        <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)} />
        <Input placeholder="Senha" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)} />
        <Button title="Cadastrar" onClick={handleSignUp} />
        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  )
}
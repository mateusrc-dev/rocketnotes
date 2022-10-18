import { useState } from 'react' //importando useState pra armazenar estados - email e senha
import { useAuth } from '../../hooks/auth' //importando o nosso contexto
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom' //o Link do react-router tem uma propriedade chamada to
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Form, Background } from './styles'


export function SignIn() {
  const [email, setEmail] = useState("") //criando os estados vazios que vão mudar a partir do momento que for digitado algo no input por causa do onChange
  const [password, setPassword] = useState("")
  const { signIn } = useAuth() //vamos usar o contexto que criamos
  function handleSignIn() {
    signIn({email, password}) //passando para a função email e password - função que vai ter a rota sessions para fazer o post
  }
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)}/>
        <Input placeholder="Senha" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)}/>
        <Button title="Entrar" onClick={handleSignIn} />
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
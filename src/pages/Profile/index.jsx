import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi' //importando as imagens
import {Container, Form, Avatar} from './styles'  
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

export function Profile() {
  return(
    <Container>
      <header>
        <a href="/"> 
          <FiArrowLeft/> 
        </a>
      </header>
      <Form>
        <Avatar>
          <img 
          src="https://github.com/mateusrc-dev.png" 
          alt="Foto do usuário"
          />
          <label htmlFor="avatar"> 
            <FiCamera/> 
            <input //o htmlFor é pra conectar o label com o input através do 'id'
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>
        <Input
          placeholder="Nome" 
          type="text"
          icon={FiUser}
        />
        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
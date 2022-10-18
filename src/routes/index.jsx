import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app.routes' //vamos separar as rotas em AppRoutes e AuthRoutes para que o usuário só tenha acesso as páginas adequadas dependendo se ele estiver logado ou não
import { AuthRoutes } from './auth.routes'
import { useAuth } from '../hooks/auth' //importando o hook de autenticação para acessar o usuário

export function Routes() {
  const { user } = useAuth()
  return ( //if ternário - se caso existir um usuário vai ser renderizado a primeira rota, se não, a segunda
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}

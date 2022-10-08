import { BrowserRouter } from 'react-router-dom'
import {AppRoutes} from './app.routes' //vamos separar as rotas em AppRoutes e AuthRoutes para que o usuário só tenha acesso as páginas adequadas dependendo se ele estiver logado ou não
import {AuthRoutes} from './auth.routes'

export function Routes() {
  return( 
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

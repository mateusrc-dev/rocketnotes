//rota da aplicação - usuário só vai acessá-las quando não estiver logado - são as telas de autenticação
import {Routes, Route} from 'react-router-dom'
//importando os componentes (que vão ser as páginas) que vão fazer parte das rotas da parte de autenticação
import {SignIn} from '../pages/SignIn'
import {SignUp} from '../pages/SignUp'

export function AuthRoutes() {
  return( //componente Routes vai envolver todas as rotas - Route é o componente que vamos dizer o endereço e o elemento que vai ser renderizado, exibido
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
    </Routes>
  ) 
}
//rota da aplicação - usuário só vai acessá-las quando estiver logado na aplicação
import {Routes, Route} from 'react-router-dom' //vamos importar o Routes e o Route do react-router-dom
//importando os componentes (que vão ser as páginas) que vão fazer parte das rotas da aplicação
import {New} from '../pages/New'
import {Home} from '../pages/Home'
import {Profile} from '../pages/Profile'
import {Details} from '../pages/Details'

export function AppRoutes() {
  return( //componente Routes vai envolver todas as rotas - Route é o componente que vamos dizer o endereço e o elemento que vai ser renderizado, exibido
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<New/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
  ) //no details é preciso do código (parâmetro) da nota pra exibir ela
}
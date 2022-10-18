//separando toda lógica de autenticação aqui - centralizando em um único arquivo
import { createContext, useContext, useState, useEffect } from 'react' //createContext é o context api do react: função pra criar o próprio contexto - importando o useContext do react para poder usar o contexto - useState para guardar estados
import { api } from '../services/api'
export const AuthContext = createContext({}); //não estamos colocando valor padrão no momento
function AuthProvider({ children }) { //children é o componente filho - vai ser todas as rotas da nossa aplicação - vamos receber essas rotas como uma propriedade - e pra todas elas estamos provendo o nosso contexto de autenticação - lembrando que children é as propriedades que ficam dentro das tags <tag>aquidentro</tag> que vão ser as rotas no caso
  const [data, setData] = useState({}) //por enquanto o estado não tem nada dentro
  async function signIn({ email, password }) {//função de autenticação - coloca email e password entre chaves para não importar a ordem 
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data //quando usamos essa rota (sessions) é devolvido esses dados, user e token
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user)) //colocando conteúdo dentro do localstorage - trabalha com chave e valor - temos que salvar as informações no localstorage no formato de texto
      localStorage.setItem("@rocketnotes:token", token) //não precisa converter o token porque ele já é um texto
      api.defaults.headers.common['Authorization'] = `Bearer ${token}` //estamos inserindo um token do tipo 'bearer' (como fizemos no insomnia) de autorização no cabeçalho por padrão em todas as requisições que o usuário vai fazer a partir de agora
      setData({ user, token }) //colocando no estado o user e email no data porque vamos compartilhar com todas as rotas
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar!")
      }
    }
  }
 
  function signOut() { //funcionalidade para sair da aplicação
    //vamos remover do localstorage as informações que estão armazenadas lá:
    localStorage.removeItem("@rocketnotes:token"); // remove é pra remover o item do localstorage
    localStorage.removeItem("@rocketnotes:user")
    setData({}) //vamos voltar o estado a um objeto vazio - com isso não terá mais no contexto da aplicação os dados do usuário, e com isso, as rotas de entrar na aplicação vão ser ativadas
    
  }
  async function updateProfile({ user, avatarFile }) { //vamos receber os dados do usuário através de um objeto chamado user
    try { //fazendo o tratamento de exceções
      if (avatarFile){ //se existir um avatar (um arquivo selecionado) vai entrar nas chaves
        const fileUploadForm = new FormData() //precisamos enviar ele como um arquivo
        fileUploadForm.append("avatar", avatarFile); //o backend está esperando o arquivo numa aba chamada 'avatar'
        const response = await api.patch("/users/avatar", fileUploadForm) //método patch pra poder fazer uma requisição pra atualizar um campo especifico na rota '/users/avatar'
        user.avatar = response.data.avatar
      }
      await api.put("/users", user) //vamos tentar fazer uma requisição put (atualização) na rota 'users' passando nosso usuário com a variável 'api' que tem o axios 
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))//temos que atualizar as informações do usuário no localstorage e estado - usando setItem conseguimos atualizar
      setData({user, token: data.token}); //passamos o mesmo token que já está no estado
      alert("Perfil atualizado!")
    } catch (error) {
      if (error.response) { //aqui já tem todo um tratamento de erro caso a pessoa inserir a senha antiga errada ou não inserir a nova senha no backend
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar o perfil!")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token"); // o getItem é pra pegar o item que está no localstorage
    const user = localStorage.getItem("@rocketnotes:user")
    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`  //vamos inserir o token do localstorage no cabeçalho por padrão em todas as requisições que o usuário vai fazer
      setData({ //vamos atualizar o estado - porque o estado vai ser compartilhado com toda a aplicação - vamos atualizar segudos os dados do localstorage - isso vai fazer com que a página ao ser atualizada continuar dentro das rotas do user autenticado
        token,
        user: JSON.parse(user) //pegando os dados do usuário que estava no formato texto e voltando ele para o formato objeto json
      })
    }
  }, []) //useEffect tem duas partes, a primeira parte é uma arrow function pra executar algo (é executado logo após a renderização do componente) - no vetor colocamos o estado que desejarmos, se colocar um estado, quando ele mudar é ativado o useEffect novamente (vamos deixa vazio o vetor) 
  return ( //esse arquivo vai ser jsx porque vamos usar a sintaxe do jsx - vamos colocar como conteúdo do contexto os dados do usuário com o token no cabeçalho e também a função signIn (entre outras funções) - vai ficar acessível para toda a aplicação (todas as rotas)
    <AuthContext.Provider value={{ signIn, user: data.user, signOut, updateProfile }} >
      {children}
    </AuthContext.Provider>

  )
}

function useAuth() { //criando um hook
  const context = useContext(AuthContext) //vamos usar o contexto que criamos

  return context;
}

export { AuthProvider, useAuth }; //exportando as funcionalidades pra ser usado em outro arquivo
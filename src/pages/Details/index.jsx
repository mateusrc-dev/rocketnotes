//import {Fragment} from 'react'; //podemos importar o fragment do react e usa-lo também pra "empacotar" os elementos
//import "./styles.css" //importando o css - com isso os estilos são aplicados automaticamente 
import { useState, useEffect } from 'react' //importar o useEffect pra buscar as notas quando a interface for carregada - useState para guardar as informações da nota no estado
import { api } from '../../services/api'
import { Container, Links, Content } from "./styles.js"; // usando styled componentes
import { Button } from '../../components/Button' //importando o button
import { useParams, useNavigate } from 'react-router-dom' //useParams é pra gente buscar pelos parâmetros que existe na rota - useNavigate é pra nevegar pelas rotas
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

//na linguagem jsx podemos usar html dentro de javascript
export function Details() {//nome da interface tem que ser o mesmo nome do diretório - o nome dos componentes tem que começar com a letra maiúscula - pra manter um padrão legal - precisamos colocar export para exportar o componente/interface
  const params = useParams() //inicializando o useParams
  const navigate = useNavigate() //inicializando o useNavigate
  const [data, setData] = useState(null) //criando o estado data e o estado inicial dele será nulo
  function handleBack() {
    //navigate("/") //quando essa função for chamada vamos nevegar para a rota 'home' - com navigate colocando uma rota ficamos empilhando o histórico de navegação
    navigate(-1) //com -1 a gente volta no nosso histórico de navegação em vez de empilhar 
  }
  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?") //confirm faz parte do próprio JavaScript e devolve como resposta um boolean
    if(confirm) { //se a resposta do usuário for positiva, vai entrar nas chaves
      await api.delete(`/notes/${params.id}`) //vamos usar a rota /notes pra deletar a nota que com o método delete
      handleBack() //após deletar vamos voltar pra página home
    }
  }
  useEffect(() => {
    async function fetchNote() { //função pra buscar os dados da nota
      const response = await api.get(`/notes/${params.id}`) //usando a api com axios e fazendo uma requisição get pra pegar os dados da nota do id específico
      setData(response.data) //atualizando o 'data' com os dados da nota
    }
    fetchNote() //chamando a função dentro de useEffect
  }, []) //não vamos colocar dependências pra o useEffect carregar somente uma vez quando a página for renderizada
  return ( //dentro do return é onde temos o conteúdo da nossa interface - o Container contem um elemento chamado div com configuações css
    <Container>
      <Header />
      { //vamos envolver o main por chaves
        data &&  // '&&' é para que o main só seja mostrado se existir conteúdo
        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={handleRemove} />
            <h1>{data.title}</h1>
            <p>
              {data.description}
            </p>
            {
              data.links && // '&&' é para que o section só sejm renderizado se existir links, se existirem vamos percorrer cada um deles com o map
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => ( //map é para percorrer cada link para renderizar cada link que existir no note specífico na tela - o '_blank' é para o link abrir em uma nova página
                      <li> <a key={String(link.id)} href={link.url} target="_blank"> {link.url} </a> </li>
                    ))
                  }
                </Links>
              </Section>
            }
            {data.tags && // '&&' é para que o section só sejm renderizado se existir tags, se existirem vamos percorrer cada um deles com o map
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (  //map é para percorrer cada tag para renderizar cada tag que existir no note específico na tela
                    <Tag key={String(tag.id)} title={tag.name} />
                  ))
                }
              </Section>
            }
            <Button title="Voltar" onClick={handleBack} /*chamando a função que navega para a rota home*//>
          </Content>
        </main>
      }
    </Container >

  ) //passando propriedades (title) para o componente, podemos passar mais de uma propriedade - os valores para propriedade children vão ser inseridos dentro da tag 'Section' - a tag 'Content' vai servir para colocar os espaçamentos adequados nos elementos
}


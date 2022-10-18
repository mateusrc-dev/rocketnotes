import { FiPlus, FiSearch } from 'react-icons/fi' //importando os ícones
import { useState, useEffect } from 'react' //importando o useState pra criar estados - importando useEffect que é uma função que é executada quando o componente é renderizado
import { api } from '../../services/api' //importando a api que tem o axios que nos permite fazer requisições com os métodos
import { useNavigate } from 'react-router-dom' //importando o useNavigate para fazer a navegação entre páginas
import { Container, Brand, Menu, Search, Content, NewNotes } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

export function Home() {
  const [tags, setTags] = useState([]) //criando estado para as tags (estado que vai guardar todas as tags) - estado inicial vai ser um array vazio
  const [tagsSelected, setTagsSelected] = useState([]) //criando o estado das tags selecionadas - vamos usar o array porque pode ficar mais de uma tag selecionada
  const [search, setSearch] = useState("")//criando estado para guardar o conteúdo da caixa de pesquisa - valor inicial do estado será uma string vazia
  const [notes, setNotes] = useState([])//criando estado para guardar as notas - estado inicial vai ser um array vazio, vai ser o array porque os notas da pesquisa aparecem em um array
  const navigate = useNavigate() //inicializando o useNavigate
  function handleTagSelected(tagName) { // função pra lidar com a seleção da tag - vamos passar como parâmetro dessa função a tag selecionada no momento
    if (tagName === "all") { //all é o valor que vem do textbutton 'Todos' quando é clicado - se caso o 'Todos' for clicado vai entrar nas chaves
      return setTagsSelected([]) //vamos atualizar o valor de tagsSelected para um array vazio para todas as tags pararem de ficar selecionadas
    }
    const alreadySelected = tagsSelected.includes(tagName) //verificando se a tag clicada já está dentro de tagsSelected, se sim, vai retornar true
    if (alreadySelected) { //se o teste acima for verdadeiro, vai entrar nas chaves
      const filteredTags = tagsSelected.filter(tag => tag !== tagName) //se a 'tag' (variável auxiliar de filter que está percorrendo todas as tags de tagsSelected) for igual a 'tagName' (tag clicada no momento), ela não vai ser incluída no nosso array retornado por filter porque vai dar false
      setTagsSelected(filteredTags) //passando o novo array sem as tags que foram clicadas quando estavam laranja
    } else {
      setTagsSelected(prevState => [...prevState, tagName]) //usando função pra atualizar estado de 'tagsSelected' - dentro desse estado vamos guardar as tags selecionadas - '...prevState' é pra despejar todas as tags que tinha antes dentro do array (tags selecionadas), e depois vai vim a nova tag selecionada (os 'três pontos' é pra não ficar uma lista dentro de outra lista) - isso vai permitir que as tags fiquem ativadas ao mesmo tempo
    }
  }
  function handleDetails(id) { //nessa função vamos esperar o id da nota selecionada
    navigate(`/details/${id}`) //usando navigate pra levar usuário pra outra interface - através do id da nota vamos para o details da nota específica
  }
  useEffect(() => { //useEffect não aceita async, temos que criar outra função para usar async...await
    async function fetchTags() { //função que vai buscar as tags - como ela vai ser usada somente para o useEffect, vamos colocar ela dentro do useEffect e chamar ela dentro do próprio useEffect 
      const response = await api.get("/tags") //vamos usar o método get na rota '/tags' pra pegar todas as tags do usuário e colocar na variável response
      setTags(response.data) //atualizando o estado de 'tags' com setTags, colocando os dados dentro de response
    }
    fetchTags()
  }, []) //na estrutura useEffect temos a função que é executada quando o componente é renderizado e temos um vetor que podemos colocar estados (se estados mudam a função é executada novamente)
  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/?title=${search}&tags=${tagsSelected}`) //vamos pegar (método get) os dados na rota '/notes' através de querys
      setNotes(response.data)//guardando as notas no estado 'notes'
    }
    fetchNotes() //chamando a função dentro do próprio useEffect
  }, [tagsSelected, search]) //na estrutura useEffect temos a função que é executada quando o componente é renderizado e temos um vetor que podemos colocar estados (se estados mudam a função é executada novamente) - se o usuário selecionar uma tag nova (atualizar estado de tagsSelected) a pesquisa vai recarregar com o filtro aplicado - se o usuário digitar algo (estado de search for atualizado) a pesquisar vai recarregar de acordo com o que for digitado
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li><ButtonText title="Todos" isActive={tagsSelected.length === 0} /*se o teste lógico for verdadeiro, ou seja, não tiver nada dentro de tagsSelected, o isActive será ativado*/ onClick={() => handleTagSelected("all")} /></li>
        {
          tags && tags.map(tag => ( //o '&&' é pra fazer a verificação se existe tags, se existir, vai percorrer todas elas com map
            <li ><ButtonText title={tag.name} onClick={() => handleTagSelected(tag.name)} key={String(tag.id)} isActive={tagsSelected.includes(tag.name)} /*vamos verificar se o 'tag.name' existe dentro de 'tagsSelected' - includes retorna true caso o 'tag.name' exista dentro de 'tagsSelected'*/ /></li>
          )) //dentro de cada tag vai ter informações como id, user_id, note_id
        }
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} onChange={e => setSearch(e.target.value)} /*atualizando o estado de 'search' que guarda conteúdo do título*/ />
      </Search>
      <Content>
        <Section title="Minhas notas">
          {
            notes.map(note => ( //vamos percorrer o que tem dentro de cada nota dentro de notes, as notas que aparecerem vão ser modificadas de acordo com o que for digitado no title e com as tags selecionadas - como esse componente está sendo gerado através de uma estrutura de repetição por padrão vamos colocar um key
              <Note data={note} /*dentro de note tem propriedades como title, tags...*/ key={String(note.id)} onClick={() => handleDetails(note.id)} /*vamos enviar como parâmetro para a função o id da nota que está sendo percorrida no momento pelo map*/ />
            ))
          }
        </Section>
      </Content>
      <NewNotes to="/new">
        <FiPlus />
        Criar nota
      </NewNotes>
    </Container>
  );
}
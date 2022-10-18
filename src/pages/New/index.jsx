import { useState } from 'react'
import { Container, Form } from './styles'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function New() {
  const [title, setTitle] = useState("") //criando estado para o título - o estado inicial vai ser uma string vazia
  const [description, setDescription] = useState("") //criando estado para a descrição - o estado inicial vai ser uma string vazia

  const [links, setLinks] = useState([]) //criando o estado dos links (guarda todos os links ), o estado inicial dos links vai ser um array vazio
  const [newLink, setNewLink] = useState("") //criando um estado pra poder guardar o novo link adicionado, estado inicial será um texto vazio

  const [tags, setTags] = useState([]) //criando o estado das tags (guarda todas os tags), o estado inicial das tags vai ser um array vazio
  const [newTag, setNewTag] = useState("") //criando um estado pra poder guardar a nova tag adicionada, estado inicial será um texto vazio

  const navigate = useNavigate()
  function handleBack() {
    //navigate("/") //quando essa função for chamada vamos nevegar para a rota 'home' - com navigate colocando uma rota ficamos empilhando o histórico de navegação
    navigate(-1) //com -1 a gente volta no nosso histórico de navegação em vez de empilhar 
  }
  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])//aqui vamos acessar a função pra atualizar o estado - vamos acessar o estado anterior armazenado dentro do estado (prevState) -> '...prevState' é pra despejar todos os links que tinha antes, e depois vai vim o novo link
    setNewLink("") //resetando o estado do link após ele ter sido incluído acima em 'links' (que guarda todos os links)
  }
  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted)) //temos todo o conteúdo atual do estado (os links) em preState antes dele ser atualizado - filter é parecido com o map, retorna uma lista dependendo do que foi colocado dentro dos parenteses (vamos retornar uma lista sem o link deletado) - o link que não for diferente de deleted não vai ser incluído no novo array (vai dar falso no teste lógico)
  }
  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]) //aqui vamos acessar a função pra atualizar o estado das tags - vamos acessar o estado anterior armazenado dentro do estado (prevState) -> '...prevState' é pra despejar todas as tags que tinha antes, e depois vai vim a nova tag (os 'três pontos' é pra não ficar uma lista dentro de outra lista)
    setNewTag("") //resetando o estado da newTag após ela ter sido incluída acima em 'tags' (que guarda todos as tags)
  }
  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted)) //temos todo o conteúdo atual do estado (as tags) em preState antes dele ser atualizado - filter é parecido com o map, retorna uma lista dependendo do que foi colocado dentro dos parenteses (vamos retornar uma lista sem a tag deletada) - a tag que não for diferente de deleted não vai ser incluída no novo array (vai dar falso no teste lógico)
  }
  async function handleNewNote() {
    if (!title) { //se title estiver vazio, ou seja, não tiver nada digitado para o onChange captar o evento e usar o setTitle pra atualizar o estado de title, então vai entrar nas chaves
      return alert("Digite o título da sua nota!")
    }
    if (newLink) { //se dentro do newLink tiver alguma coisa (porque quando clicamos em adicionar o newLink fica vazio (setNewLink(""))), vai entrar nas chaves
      return alert("Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio!")
    }
    if (newTag) { //se dentro do newTag tiver alguma coisa (porque quando clicamos em adicionar o newTag fica vazio (setNewTag(""))), vai entrar nas chaves
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio!")
    }
    await api.post("/notes", { //vamos importar o api com o axios pra fazer uma requisição com o método post na rota '/notes'
      title, description, tags, links //vamos salvar no banco de dados (em notes) todas as informações da nota
    })
    alert("Nota criada com sucesso!")
    navigate(-1) //importamos o navigate para retornar a página home quando o usuário salvar a nota com sucesso
  }
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="Voltar" onClick={handleBack} />
          </header>
          <Input placeholder="Título" onChange={e => setTitle(e.target.value)} />
          <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)} />
          <Section title="Links úteis">
            {
              links.map((link, index) => ( //'links' guarda todos os links - com map vamos percorrer cada link - não precisamos colocar isNew porque ele não é novo (se não for novo ele vai ter um designer um pouco diferente,) - não vamos colocar placeholder - no value vamos colocar o valor do link que está sendo percorrido no momento - não vamos colocar onChange - precisamos colocar uma propriedade de key (porque os componentes vão ser renderizados por uma lista) - map além de devolver o item devolve o index (que é a posição do elemento dentro da lista) - no handleRemoveLink vamos passar como parâmetro o link atual percorrido pelo map (devido o parâmetro vamos usar uma arrow function)
                <NoteItem key={String(index)} value={link} onClick={() => { handleRemoveLink(link) }} />
              ))
            }
            <NoteItem placeholder="Novo link" isNew value={newLink} onChange={e => setNewLink(e.target.value)} onClick={handleAddLink} />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => ( //'tags' guarda todos as tags - com map vamos percorrer cada tag - não precisamos colocar isNew porque ela não é nova (se não for novo ele vai ter um designer um pouco diferente,) - não vamos colocar placeholder - no value vamos colocar o valor da tag que está sendo percorrida no momento - não vamos colocar onChange - precisamos colocar uma propriedade de key (porque os componentes vão ser renderizados por uma lista) - map além de devolver o item devolve o index (que é a posição do elemento dentro da lista) - no handleRemoveTag vamos passar como parâmetro a tag atual percorrida pelo map (devido o parâmetro vamos usar uma arrow function)
                  <NoteItem key={String(index)} value={tag} onClick={() => { handleRemoveTag(tag) }} />
                ))
              }
              <NoteItem placeholder="Nova tag" isNew onChange={e => setNewTag(e.target.value)} value={newTag} onClick={handleAddTag} />
            </div>
          </Section>
          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  )
}
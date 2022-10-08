import styled from 'styled-components' //styled-components possibilita escrever css dentro de um arquivo JavaScript
export const Container = styled.div`
  width: 100%;
  height: 100vh; 
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: "header" "content";
  main {
    grid-area: content; //vamos usar o main para aplicar a região do nosso grid nela - que no caso é content
    overflow-y: auto; 
    padding: 64px 0;
  }
` //armazenando dentro de Container um elemento html e definindo configurações css para esse elemento - vamos colocar display grid para dizer onde cada parte do layout vai se encaixar - grid-template-rows porque vai ter duas linhas, uma para o cabeçalho e uma para o conteúdo, primeira linha (header) vai ter 105px e o conteúdo vai ser auto - grid-template-areas é pra dar nomes as áreas (linhas)

//criando um componente para estilizar os links - criando um elemento html ul com configurações css e atribuindo a Links
export const Links = styled.ul`
  list-style: none;
  li {
    margin-top: 12px;
    a {
      color: ${({theme}) => theme.COLORS.WHITE}
  }
}
`
//criando o componente para colocar espaçamentos adequadros entre elementos - criando um elemento html div com configurações css e atribuindo a Content
export const Content = styled.div` 
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  button:first-child { //selecionando o primeiro botão
    align-self: end;
  }
  h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }
  p {
    font-size: 16px;
    margin-top: 16px;
    text-align:justify;
  }
`

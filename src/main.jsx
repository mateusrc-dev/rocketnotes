import React from 'react' //importação do react que disponibiliza a sintaxe do jsx
import ReactDOM from 'react-dom/client' //serve para manipular os elementos que fazem parte da página
import {Home} from './pages/Home' //importando o arquivo que tem o conteúdo que está sendo renderizado
import {ThemeProvider} from 'styled-components' //o ThemeProvider vai prover um tema
import GlobalStyles from './styles/global'
import theme from './styles/theme.js' //importando o tema

ReactDOM.createRoot(document.getElementById('root')).render( //ReactDOM é uma biblioteca pra manipular os elementos que fazem parte da DOM - React usa o ReactDOM para acessar e manipular elementos - no caso o elemento acessado aqui é a div com o id 'root' - dentro dessa div vai ser renderizado (render) um conteúdo (conteúdo que vem do <Details />, entre outras tags - estão sendo importadas acima) - tudo que estiver dentro de ThemeProvider vai ter acesso ao theme
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
      <GlobalStyles/>
      <Home/>
    </ThemeProvider>
  </React.StrictMode>
)

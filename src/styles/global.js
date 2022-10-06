import {createGlobalStyle} from 'styled-components' 
//novamente vamos criar um elemento html e escrever configurações css para ele
export default createGlobalStyle`
  * { /*configurações gerais do documento*/
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased; //propriedade para deixar as fontes mais suaves
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none; //remover qualquer linha que apareça em contornos
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
` //vamos criar um estilo global - é possível usar o theme porque o elemento createGlobalStyle vai ser importado dentro de main.jsx e colocado dentro da tag ThemeProvider
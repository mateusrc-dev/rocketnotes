import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: //neste componente colocamos quem vai ficar em cada linha - nos elementos colocamos o nome deles através da propriedade grid-area
  "header" //o componente Header tem a propriedade grid-area: header
  "content";

  main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap; //para quando não caber mais na linha jogar para a linha de baixo
  }
`;

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;
    a { //não precisa colocar pra selecionar 'header a {}' porque já estamos dentro de header
      font-size: 20px;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
  }
`;
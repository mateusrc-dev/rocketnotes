import styled from 'styled-components'

export const Container = styled.div` //elemento que envolve todo mundo - elemento que está sendo padrão no nosso projeto
  width: 100%;

  header {
    width: 100%;
    height: 144px;
    background: ${({theme}) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center; 
    padding: 0 124px;
    svg { //editando a imagem
      color: ${({theme}) => theme.COLORS.GRAY_100};
      font-size: 30px;
    }
    button {
      background: none;
      border: none;
    }
  }
`;

export const Form = styled.form` //criando o elemento que vai envolver os inputs
  max-width: 340px;
  margin: 30px auto 0;

  div:nth-child(4) { //lembrando que o componente Input é um elemento html div que foi atribuíndo a variável Container 
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative; //é pra deixar o label dentro do espaço de Avatar que é uma div 
  margin: -124px auto 32px;
  width: 186px;
  height: 186px;
  img {
    width: 186px; //Avatar vai ter o mesmo tamanho da imagem justamente para o label ficar sobre a imagem
    height: 186px;
    border-radius: 50%;
  }
  label {
    width: 48px; //o espaço do label é ligeiramente maior que a imagem svg
    height: 48px;
    background-color: ${({theme}) => theme.COLORS.ORANGE};
    border-radius: 50%; //vamos deixar o espaço do label redonda
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;
  }

  input {
    display: none; //para o botão de inserir um item sumir para ficar apenas a imagem svg aparecendo
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({theme}) => theme.COLORS.BACKGROUND_800}
  }
`;
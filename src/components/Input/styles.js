import styled from 'styled-components';

export const Container = styled.div` //vamos criar o elemento html como uma div porque vamos receber um ícone como propriedade, as outras propriedades vão ser passadas para o input (o tipo do input, etc...)
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.GRAY_300};
  margin-bottom: 8px;
  border-radius: 10px;
  input {
    height: 56px;
    width: 100%;
    padding: 12px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent; //a cor do background vai ser a cor colocada em Container
    border: 0; //vai ser tirado a borda
    &:placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }
  svg {
      margin: 0 0 0 16px; //configurando espaçamento do ícone
    }
`;


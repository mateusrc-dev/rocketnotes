import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  //como passamos propriedades dentro de Container no arquivo jxs podemos recuperar essa propriedade aqui, podemos acessar essa propriedade fazendo interpolação (propriedade é uma variável)
  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900}; //podemos usar a propriedade isNew no ternário, caso seja uma nota nova (true), o background vai ser transparente, caso contrário...
  color: ${({theme}) => theme.COLORS.GRAY_300}; 
  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'}; //aqui no caso vai novamente ser um ternário, se a nota for nota, vai aplicar a primeira configuração, caso contrário...
  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;
  button {
    border: none;
    background: none;
  } 

  .button-delete {
    color: ${({theme}) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({theme}) => theme.COLORS.ORANGE};
  }

  input {
    height: 56px;
    width: 100%;
    padding: 12px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    &::placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }
`;


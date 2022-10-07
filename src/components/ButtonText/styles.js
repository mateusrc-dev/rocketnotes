import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({theme, isActive}) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  border: none;
  font-size: 16px;
`; //isActive foi passado como propriedade na tag Container - acima é usado um ternário, se for verdadeiro a cor vai ser a primeira, se não, a cor usada vai ser a segunda - se caso o isActive que é um boolean for inserido como propriedade o isActive será verdadeiro, portanto, será ativado
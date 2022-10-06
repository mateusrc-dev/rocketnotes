import styled from 'styled-components'
//Criando abaixo um componente que vai servir para estilizar a sessão -> a tag semântica section com as configurações css vai ser atribuída a Container
export const Container = styled.section`
  margin: 28px 0; //margin do Container
  h2 { //pegando o title e inserindo uma linha abaixo
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    padding-bottom: 16px;
    margin-bottom: 24px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }
`;

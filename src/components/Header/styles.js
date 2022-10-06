import styled from 'styled-components'
//novamente criando um elemento html no javascript e atribuindo essa tag com configurações css a Container
export const Container = styled.header`
  grid-area: header; //isso vai fazer com que se o conteúdo da página for muito extenso o cabeçalho continue fixo acima da tela
  height: 105px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between; //os elementos vão ficar cada um em uma extremidade
  padding: 0 80px;
`;
//novamente criando um elemento html no javascript e atribuindo essa tag com configurações css a Profile
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img { // pode-se usar o sinal > (> img {}) é pra garantir que vai ser estilizada a imagem que existe dentro do componente de Profile
    width: 56px;
    height: 56px;
    border-radius: 50%; //pra deixar a imagem redonda
  }

  div {
    display: flex;
    flex-direction: column;
    line-height: 24px;
  }

  span {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100};

  }

  strong {
    font-size: 18px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }
`;
//novamente criando um elemento html no javascript e atribuindo essa tag com configurações css a Logout 
export const Logout = styled.button` //configurações que vão ser aplicadas ao botão svg
  border: none;
  background: none;
  svg { //editando a imagem svg
    color: ${({theme}) => theme.COLORS.GRAY_100}; 
    font-size: 36px; 
  } 
`;
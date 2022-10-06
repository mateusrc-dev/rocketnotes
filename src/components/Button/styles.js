import styled from 'styled-components';

//novamente criando uma variável que vai receber um elemento html com estilização -> as configurações desse elemento podem ser usadas em qualquer lugar
export const Container = styled.button`
  width: 100%; //botão vai ocupar 100% da largura de onde ele estiver
  background-color: ${({theme}) => theme.COLORS.ORANGE};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500; //medium
  &:disabled { //essas vão ser as configurações de button quando ele estiver desabilitado - o & está se referindo ao button
    opacity: 0.5;
  }
`
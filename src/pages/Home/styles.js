import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px auto; //definindo o tamanho das colunas - duas colunas
  grid-template-rows: 105px 128px auto 64px; //definindo o tamanho das linhas
  grid-template-areas: //definindo os nomes das áreas
  "brand header"
  "menu search"
  "menu content"
  "newnote content";

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
`;

export const Menu = styled.ul`
  grid-area: menu;
  background: blue;
`;

export const Search = styled.div`
  grid-area: search;
  background: green;
`;

export const Content = styled.div`
  grid-area: content;
  background: pink;
`;

export const NewNotes = styled.button`
  grid-area: newnote;
  background: yellow;
`;

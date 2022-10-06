//import {Fragment} from 'react'; //podemos importar o fragment do react e usa-lo também pra "empacotar" os elementos
//import "./styles.css" //importando o css - com isso os estilos são aplicados automaticamente 
import {Container, Links, Content} from "./styles.js"; // usando styled componentes
import {Button} from '../../components/Button' //importando o button
import {Header} from '../../components/Header'
import {Section} from '../../components/Section'
import {Tag} from '../../components/Tag'
import {ButtonText} from '../../components/ButtonText'

//na linguagem jsx podemos usar html dentro de javascript
export function Details() {//nome da interface tem que ser o mesmo nome do diretório - o nome dos componentes tem que começar com a letra maiúscula - pra manter um padrão legal - precisamos colocar export para exportar o componente/interface

  return( //dentro do return é onde temos o conteúdo da nossa interface - o Container contem um elemento chamado div com configuações css
    <Container>  
      <Header/> 
      <main>
      <Content>
      <ButtonText title="Excluir nota"/>
      <h1>Introdução ao React</h1>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <Section title="Links úteis">  
        <Links>
          <li> <a href="#">https://www.rocketseat.com.br</a> </li>
          <li> <a href="#">https://www.rocketseat.com.br</a> </li>
        </Links>
      </Section>
      <Section title="Marcadores">  
        <Tag title="express"/>
        <Tag title="nodejs"/>
      </Section>
      <Button title="Voltar"  />
      </Content>
      </main>
      </Container>
   
  ) //passando propriedades (title) para o componente, podemos passar mais de uma propriedade - os valores para propriedade children vão ser inseridos dentro da tag 'Section' - a tag 'Content' vai servir para colocar os espaçamentos adequados nos elementos
}


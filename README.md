# ctd-esp-front1-final

Exame Final de Frontend IV

## Indice

- [Requisitos](#requisitos)
  - [Condições mínimas de aprovação](#condições-mínimas-de-aprovação)
  - [Aspectos que modificam a avaliação final da nota](#aspectos-que-modificam-a-avaliação-final-da-nota)
- [Funcionalidades](#funcionalidades)
  - [Funcionalidades obrigatorias](#funcionalidades-obrigatorias)
  - [Funcionalidades extras](#funcionalidades-extras)
  - [Resultado final](#resultado-final)
- [Desenvolvimento](#desenvolvimento)
  - [Iniciando o App](#iniciando-o-app)
  - [Dependencias](#dependencias)
  - [Dependencias de Desenvolvimento](#dependencias-de-desenvolvimento)
  - [Componentes de UI](#componentes-de-ui)
- [Entrega](#entrega)
  - [Data de Entrega](#data-de-entrega)
  - [Formato de Entrega](#formato-de-entrega)
- [Guia para começar](#guia-para-começar)
  - [Paso 0 - Instalação](#passo-0---instalação)
  - [Paso 1 - Configuração do Redux](#passo-1---configuração-de-redux)
  - [Paso 2 - Configuração do Thunk](#passo-2---configuração-de-thunk)
  - [Paso 3 - Configuração do Saga](#passo-3---configuração-de-saga)
  - [Paso 4 - Tipando os componentes existentes](#passo-4---tipando-os-componentes-existentes)
  - [Paso 5 - Modelagem](#passo-5---modelagem)
  - [Paso 6 - Criação dos estados dos reducers](#passo-6---criação-dos-estados-dos-reducers)
  - [Paso 7 - Montagem da UI](#passo-7---monstagem-da-ui)
  - [Paso 8 - Integração](#passo-8---integração)

## Requisitos

É essencial fazer um Fork deste projeto, para poder trabalhar _individualmente_. Projetos que tenham sido realizados sem partir deste modelo não serão aceitos.

### Condições mínimas de aprovação

As seguintes condições são requisitos mínimos necessários para a aprovação final:

    * **Conformidade com todos os recursos obrigatórios**
    * Somente as bibliotecas detalhadas neste README podem ser usadas.
    * Qualquer funcionalidade implementada usando uma biblioteca diferente das permitidas não será considerada implementada.
    * Deve ser desenvolvido usando Typescript como linguagem. No mínimo, espera-se que a tipagem de props seja usada em componentes React.
    * Todas as informações do item devem vir da API [Rick and Morty] (https://rickandmortyapi.com/). Dados rígidos (codificados) não são suportados no frontend. Para isso, deve-se implementar a lógica para lidar com a solicitação à referida API.
     * Deve ser desenvolvido usando **Redux** em conjunto com **Thunk** ou **Saga**. A possibilidade de escolher entre um dos dois é concedida. Espera-se pelo menos o uso correto de um reducer, além do uso de uma ThunkAction (Thunk) ou função de gerador (Saga)
     * Pelo menos 7 funções devem ser devidamente documentadas (podem ou não ser componentes do React)

### Aspectos que modificam a avaliação final da nota

Os seguintes aspetos são extras ao requisito mínimo de aprovação que serão tidos em conta para aumentar a nota final, desde que a sua implementação seja correta:

    TypeScript
      * Será levado em consideração o uso do Typescript além da tipagem de props de componentes, principalmente no caso de funções que desenvolvem lógicas, actions e reducers reutilizáveis.
      * Será valorizada a reutilização de tipos comuns que se repetem ao longo do projeto, principalmente através da reutilização de interfaces.

    Documentação
      * Será valorizado o uso correto da documentação em todas as funções e componentes.

    Validações
      * Será valorizada a adição de validações de fluxos alternativos ao normal e o tratamento de erros nas diferentes funcionalidades implementadas.

    Restaurado
      * O uso correto do Redux será valorizado pelo armazenamento do estado completo da aplicação.

    Thunk o Saga
      * Será valorizado o uso correto do Thunk ou Saga para o uso de cada função assíncrona dentro de cada funcionalidade.

    Boas práticas
      * Especial atenção será dada ao uso de boas práticas, reutilização de componentes e funcionalidades comuns e renderização dinâmica.

## Funcionalidades

### Funcionalidades obrigatorias

As seguintes funcionalidades são requisitos mínimos necessários para a aprovação da final e é fundamental que funcionem corretamente.

- A aplicação deve ter duas páginas:

  1 - A página inicial que deve ter:

          * Painel de filtro:
            * Ele conterá uma entrada onde o usuário poderá inserir qualquer texto que desejar para fazer um filtro nos personagens.
            * Caso o usuário exclua o texto inserido, deverá ser exibido o estado inicial, ou seja, a pesquisa sem filtro.
            * Deve ser incluído um botão "Limpar filtros", que deve excluir o texto dentro da entrada e mostrar o estado inicial, ou seja, a pesquisa sem filtro.

          * Lista de personagens
            * Você deve mostrar os personagens, que serão representados por card com informações sobre cada um deles.
            * Um máximo de 20 cards de personagens devem ser exibidos na tela por página.
            * Deve ser possível marcar e desmarcar cada personagem como favorito de seu card individual, devendo persistir esse estado no aplicativo.
            * Deve ser possível diferenciar se um personagem está marcado como favorito ou não.

  2 - A página de favoritos que deve cumprir os seguintes requisitos:

            * Todos os personagens marcados como favoritos devem constar na lista de favoritos na segunda página do aplicativo.
            * Se o usuário desmarcar um personagem como favorito, ele deve desaparecer da lista de favoritos.
            * Um personagem que foi desmarcado dos favoritos pode ser marcado novamente na tela inicial e deve aparecer na lista novamente.

### Funcionalidades extras

Os seguintes aspectos são extras ao requisito de aprovação mínima que serão levados em consideração para aumentar a nota final, desde que seu funcionamento esteja correto:

     * A página de favoritos:
       * Você pode ter um botão "Remover tudo", que deve desmarcar todos os personagens da lista de favoritos e não devem aparecer marcados como favoritos na página principal.

     * Realização de uma terceira página de visualização de cada personagem:
     Clicar em um personagem deve nos redirecionar para esta página.
         * Exigirá a invocação da API Rick and Morty [Episodes](https://rickandmortyapi.com/documentation/#get-multiple-episodes).
         * Dentro da visão de cada personagem:
            * Uma lista dos episódios em que aparece será exibida.
            * Também podemos indicar se o personagem está marcado como favorito ou não, e junto com a possibilidade de marcá-lo ou desmarcá-lo.

### Resultado final

    Deixamos-lhe um vídeo como exemplo de como deve funcionar a sua aplicação, na pasta public

## Desenvolvimento

### Iniciando o App

Instalado as dependências

`npm install`

Podemos iniciar nossa aplicação com o comando

`npm run start`

### Dependencias

A versão 17.0.2 do React será usada, juntamente com a versão 5 do React Scripts. O React-Router já está instalado e configurado para navegação.

Apenas as seguintes dependências podem ser instaladas:

- Redux (incluindo @reduxjs/toolkit)
- Typescript
- Thunk
- Saga (Se não quisermos usar o Thunk)

**OBSERVAÇÃO: O uso do React Query e da Context API (React) não é permitido**

### Dependencias de Desenvolvimento

As seguintes dependências de desenvolvimento adicionais (devDependencies) podem ser usadas, mas elas _não_ modificarão a nota de forma positiva, nem são requisitos para aprovação. A possibilidade de usá-los é oferecida apenas para quem sabe o que está fazendo e se sente confortável com eles.

- Redux Devtools Extension
  - Esta ferramenta foi utilizada em aula, para visualizar o estado do Redux. Pode ser útil depurar e corrigir alguns problemas em nosso código.
- Prop-Types
  - Esta ferramenta foi utilizada em aula, para validar o tipo de propriedades em tempo de execução. Pode ser para evitar alguns problemas com nosso código.
    -ESLint
  - Esta ferramenta NÃO foi usada em aula, e será vista no Frontend V. Mas se você se sentir confortável em usá-la, a configuração eslint é permitida.
- Jest e Testing Library
  - É permitido o uso de Testes para verificar as funcionalidades. O teste é um tópico do Frontend V, mas abre a possibilidade de entregar o código final com casos de teste.

### Componentes de UI

O projeto possui componentes desenvolvidos em JavaScript, que **somente** precisam ser convertidos e tipados para TypeScript caso sejam importados e utilizados.
Seu objetivo é facilitar o desenvolvimento, fornecendo componentes que são estilizados corretamente.

Lista de componentes:

- [src/componentes/layout/cabecalho.componente.jsx](src/componentes/layout/cabecalho.componente.jsx) - Cabeçalho obrigatório para cada uma das páginas. Facilita a navegação
- [src/componentes/personagens/filtros.componente.tsx](src/componentes/personagens/filtros.componente.tsx) - Componente com o texto de entrada para realizar a filtragem
- [src/componentes/personagens/grade-personagens.componente.jsx](src/componentes/personagens/grade-personagens.componente.jsx) - Grade dos personagens para a página inicial
- [src/componentes/personagens/card-personagem.componente.tsx](src/componentes/personagens/card-personagem.componente.tsx) - Card para cada personagem dentro da grade de personagens.
- [src/componentes/botoes/botao-favorito.componente.jsx](src/componentes/botoes/botao-favorito.componente.jsx) - Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
- [src/componentes/episodios/card-episodio.componente.tsx](src/componentes/episodios/card-episodio.componente.tsx) - Card para cada episódio na visualização do personagem.

## Entrega

### Data de Entrega

Somente serão aceitas entregas recebidas até o encerramento da aula 24, aula de Avaliação Final.

### Formato de Entrega

A entrega será aceita mediante o envio da URL de um repositório privado do Github, que tenha acesso compartilhado às seguintes contas:

- Camada 1 - Profesor: ??? - Conta do Github [@???](https://github.com/)
- Camada 2 - Profesor: ??? - Conta do Github [@???](https://github.com/)

O link do Formulário Google para submissão será enviado pelo professor responsável pela comissão.

## Guia para começar

Agora que vimos quais são os requisitos e funcionalidades que você deve realizar neste projeto, passaremos pelos principais passos a seguir para concluir o desenvolvimento de sua aplicação.

### Paso 0 - Instalação

Instalar Typescript

`npm install typescript@4.6.3`

Instalar Tipos de React

`npm install --dev @types/node@16.11.26 @types/react@17.0.43 @types/react-dom@17.0.14`

Instalar Redux

`npm install react-redux@7.2.6 @types/react-redux@7.1.23 @reduxjs/toolkit`

Instalar Thunk

`npm install redux-thunk@2.4.1`

Instalar Saga (Se você preferir em vez do Thunk)

`npm install redux-saga@1.1.3`

### Passo 1 - Configuração do Redux

Configurações da Store

```store.ts
import {combineReducers} from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';

// Importamos applyMiddleware do Redux, para poder adicionar Thunk ou Saga como Middleware
import { createStore, applyMiddleware } from 'redux';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";



const rootReducer = combineReducers({

});

export type IRootState = ReturnType<typeof rootReducer>;

// Tipamos o hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

export const store = createStore(
    rootReducer, composeWithDevTools() // Aqui vamos aplicar os middlewares
)

```

Então no App.jsx você deve configurar o Provider

```
  import {Provider} from "react-redux";

  <Provider store={store}>
    ...
  </Provider>
```

### Passo 2 - Configuração do Thunk

Se você for usar o Saga, pule esta etapa

```store.ts
// Importamos o thunk de redux-thunk
import thunk from 'redux-thunk'

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

```

### Passo 3 - Configuração do Saga

Esta etapa é opcional, só precisamos dela se formos usar Saga e não Thunk.

```store.ts
// Importamos o createSagaMiddleware de redux-saga
import createSagaMiddleware from "redux-saga";

...

const sagaMiddleware = createSagaMiddleware()

...

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// Levanta os observadores, ou seja, executa a Saga
// sagaMiddleware.run(tusSaga)  Depois de criar seu arquivo com as Sagas, você deve executá-las aqui

```

### Passo 4 - Tipando os componentes existentes

### Passo 5 - Modelagem

Com Redux, TypeScript e Thunk (ou Saga!) já configurados, você pode continuar a construir as interfaces do modelo. Ou seja, crie as interfaces dos objetos que você vai usar no projeto.
Para isso, recomendamos que você visualize o desenho final, e identifique os campos, variáveis ​​e tipos que precisará em seus objetos para digitá-los corretamente.
Eles não precisam ser perfeitos nesta fase, você poderá ajustá-los mais tarde, mas eles serão uma grande ajuda para você começar a trabalhar!

### Passo 6 - Criação dos estados dos reducers

É importante sermos capazes abstrair um pouco da criação da UI, e do HTML, para pensar em quais funcionalidades queremos construir.
Nesta etapa podemos identificar os eventos que a aplicação deve tratar e quais valores devem ser armazenados no estado.
Por exemplo, precisaremos armazenar os personagens retornados pela API, juntamente com o status da solicitação.

Nota: Não se esqueça de adicionar seu(s) reducer(s) à store dentro de combineReducers!

### Passo 7 - Montagem da UI

Com o modelo já criado e nosso reducer pronto para ser usado, podemos prosseguir com a construção da UI básica.
Como mencionamos anteriormente, o projeto possui alguns componentes que recomendamos que você use, mas lembre-se que você deve tipa-lós com TypeScript.
Você já seria capaz de construir a página principal, colocando o navegador, e construir uma grade que usa os cards de personagens e o componente de paginação.

Para testar esta tela, você pode chamar a API, diretamente do seu componente, através de useEffect e usando useState, mas não esqueça que você deve usar pelo menos uma vez uma chamada assíncrona através do Thunk ou Saga como condição mínima para passar.
Recomendamos que você deixe um //TODO para não esquecer de modificar esta função.

Com a grade funcionando corretamente, você pode continuar a construir a lista de favoritos. Para fazer isso, recomendamos usar a mesma API para testar a renderização da interface do usuário.
Depois de mostrar os personagens na lista de favoritos, agora você pode colocar um //TODO para lembrar de integrar isso com o estado Redux correspondente.

### Passo 8 - Integração

Agora sim, podemos ir componente por componente integrando com o Redux através dos hooks useSelector e dispatch, para interagir com o estado

_Dica: Lembre-se que você pode ver o que está acontecendo no estado através da extensão ReduxDevTools do Chrome e, se necessário, depurar para encontrar possíveis erros._

Boa sorte e sucesso!

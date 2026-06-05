Catálogo de Livros em Angular
Autor

Bernardo Ornellas Alves

Curso

Desenvolvimento Full-Stack

Disciplina

Aprofundamento em Desenvolvimento Front-end

Instituição

Universidade Estácio de Sá

Descrição do Projeto

Este projeto consiste no desenvolvimento de uma aplicação web para gerenciamento de um catálogo de livros utilizando o framework Angular.

A aplicação permite visualizar, cadastrar e excluir livros, utilizando conceitos fundamentais do desenvolvimento front-end moderno, como componentes, serviços, roteamento e formulários.

O sistema foi desenvolvido como atividade prática da disciplina Aprofundamento em Desenvolvimento Front-end, com o objetivo de aplicar os conhecimentos adquiridos sobre a arquitetura Angular e suas principais funcionalidades.

Objetivos da Atividade
Implementar componentes Angular utilizando TypeScript e HTML.
Desenvolver serviços para gerenciamento de dados.
Utilizar injeção de dependência.
Trabalhar com formulários através do FormsModule.
Implementar navegação entre páginas utilizando Angular Routing.
Aplicar estilização utilizando Bootstrap.
Manipular listas e exibição dinâmica de dados.
Funcionalidades
Listagem de Livros

A aplicação exibe uma tabela contendo:

Título do livro;
Resumo;
Editora;
Lista de autores.

Também é possível excluir livros diretamente da listagem.

Cadastro de Livros

A tela de cadastro permite informar:

Título;
Resumo;
Editora;
Autores.

Após o preenchimento dos dados, o livro é adicionado ao catálogo e o usuário é redirecionado para a página de listagem.

Navegação

O sistema possui um menu superior para navegação entre:

Lista de Livros
Novo Livro
Tecnologias Utilizadas
Angular
TypeScript
HTML5
CSS3
Bootstrap 5
Node.js
Visual Studio Code
Estrutura do Projeto
src/app/

├── app-module.ts
├── app-routing-module.ts
├── app.ts
├── app.html
├── app.css

├── livro.ts
├── editora.ts

├── controle-editora.ts
├── controle-livros.ts

├── livro-lista/
│   ├── livro-lista.ts
│   ├── livro-lista.html
│   └── livro-lista.css

└── livro-dados/
    ├── livro-dados.ts
    ├── livro-dados.html
    └── livro-dados.css
Como Executar o Projeto
Instale as dependências:
npm install
Execute a aplicação:
ng serve
Acesse no navegador:
http://localhost:4200
Considerações Finais

Este projeto permitiu a aplicação prática dos conceitos fundamentais do Angular, incluindo a criação de componentes, serviços, formulários e navegação entre páginas, proporcionando experiência no desenvolvimento de aplicações front-end estruturadas e escaláveis.
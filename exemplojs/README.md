# Projeto Prático – JavaScript, DOM, JSON e Vue.js

## Autor
**Bernardo Ornellas Alves**

---

## Descrição do Projeto

Este projeto foi desenvolvido com o objetivo de aplicar conceitos fundamentais de desenvolvimento web no lado cliente, utilizando JavaScript, manipulação do DOM, JSON e framework Vue.js.

A prática foi dividida em três etapas principais, permitindo explorar desde algoritmos de ordenação até o consumo de APIs REST e renderização dinâmica de interfaces.

---

## Objetivos da Prática

- Explorar a sintaxe JavaScript na implementação de algoritmos;
- Manipular elementos HTML através do DOM;
- Utilizar o formato JSON para armazenamento e transmissão de dados;
- Construir interfaces dinâmicas utilizando Vue.js;
- Realizar chamadas HTTP assíncronas para consumo de dados externos.

---

# Estrutura do Projeto

```txt
exemplosjs/
│
├── ordenando.js
├── ordenando.html
├── receitas.html
├── usuarios.html
└── README.md
```

---

# 1. Ordenação com JavaScript e DOM

Arquivos:

- `ordenando.js`
- `ordenando.html`

## Funcionalidades

Nesta etapa foram implementados algoritmos clássicos de ordenação e manipulação de elementos HTML utilizando DOM.

### Algoritmos implementados

- Bubble Sort
- Selection Sort
- Quick Sort
- Shuffle (embaralhamento)

### Recursos utilizados

- Arrow Functions
- DOM (`getElementById`, `createElement`, `appendChild`)
- Vetores
- `map()` e `reduce()`
- Eventos HTML

### Funcionamento

O usuário pode:

- Inserir valores numéricos;
- Escolher o algoritmo de ordenação;
- Ordenar os valores;
- Misturar os elementos da lista.

---

# 2. Página Dinâmica de Receitas

Arquivo:

- `receitas.html`

## Funcionalidades

Desenvolvimento de um catálogo de receitas com geração dinâmica de conteúdo utilizando objetos JSON e Bootstrap.

### Recursos utilizados

- JSON
- Template Strings
- Bootstrap
- `map()` e `reduce()`
- Manipulação dinâmica de HTML

### Estrutura das receitas

Cada receita contém:

- Título
- Imagem
- Ingredientes
- Modo de preparo

### Funcionamento

As receitas são armazenadas em um vetor JSON e convertidas automaticamente em cards HTML exibidos na página.

---

# 3. Usuários via REST e Vue.js

Arquivo:

- `usuarios.html`

## Funcionalidades

Implementação de consumo de API REST e renderização dinâmica de usuários utilizando Vue.js.

### Recursos utilizados

- Vue.js
- Fetch API
- JSONPlaceholder API
- Bootstrap
- Diretivas Vue

### Diretivas Vue utilizadas

- `v-for`
- `:key`
- `:src`
- `{{ }}` (interpolação)

### Funcionamento

A aplicação:

1. Realiza uma requisição HTTP;
2. Obtém dados em JSON;
3. Armazena os dados em um vetor Vue;
4. Gera automaticamente cards de usuários contendo:

- Foto
- Nome
- E-mail

---

# Tecnologias Utilizadas

- HTML5
- CSS3
- Bootstrap 5
- JavaScript ES6
- Vue.js 2
- Fetch API
- JSON

---

# Execução do Projeto

## Requisitos

- Visual Studio Code
- Navegador Web
- Extensão Live Server

## Passos

1. Abrir a pasta do projeto no Visual Studio Code;
2. Instalar a extensão **Live Server**;
3. Abrir os arquivos HTML com **Open with Live Server**;
4. Testar as funcionalidades implementadas.

---

# Considerações Finais

O desenvolvimento deste projeto permitiu consolidar conhecimentos sobre programação JavaScript no lado cliente, manipulação do DOM, consumo de APIs REST e construção dinâmica de interfaces com Vue.js, aproximando a prática acadêmica de cenários reais de desenvolvimento web.

---

**Autor:** Bernardo Ornellas Alves  
**Disciplina:** Desenvolvimento Web / Planejamento e Desenv. de Aplicacoes Web Interativas
**Ano:** 2026
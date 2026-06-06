# Sistema de Gerenciamento de Pokémon com PokeAPI

## Sobre o Projeto

Este projeto foi desenvolvido como desafio técnico proposto pela SCTech.

A aplicação consiste em uma CLI (Command Line Interface) desenvolvida em TypeScript que consome a PokeAPI para consultar informações de Pokémon, aplica validações de negócio, trata erros de integração e mantém um catálogo local persistido em arquivo JSON.

O objetivo do projeto é demonstrar conceitos fundamentais de desenvolvimento backend, como consumo de APIs REST, validação de dados externos, persistência local, organização em camadas e utilização de tipagem estática com TypeScript.

---

## Arquitetura

O projeto foi estruturado seguindo o princípio de separação de responsabilidades.

### Controllers

* `src/controllers/menuController.ts`
  Responsável pela interação com o usuário através do terminal e pela orquestração das operações disponíveis no sistema.

### Services

* `src/services/adicionarPokemon.ts`
  Adiciona um Pokémon ao catálogo local após validar sua existência na PokeAPI e verificar possíveis duplicidades.

* `src/services/buscarPokemon.ts`
  Consulta informações detalhadas de um Pokémon diretamente na PokeAPI.

* `src/services/deletarPokemon.ts`
  Remove um Pokémon do catálogo local utilizando seu ID.

* `src/services/lerLista.ts`
  Realiza a leitura do catálogo persistido no arquivo `pc_box.json`.

* `src/services/listarPokemon.ts`
  Lista todos os Pokémon armazenados no catálogo local.

* `src/services/salvarLista.ts`
  Responsável pela persistência dos dados no arquivo JSON.

* `src/services/validarPokemon.ts`
  Consome a PokeAPI, valida a resposta recebida e converte os dados para o modelo interno da aplicação.

### Models

* `src/models/pokemonApiResponse.ts`
  Interface que representa a estrutura de dados retornada pela PokeAPI.

* `src/models/pokemonResumo.ts`
  Interface utilizada para representar os dados manipulados e exibidos pela aplicação.

### Utils

* `src/utils/capitalize.ts`
  Utilitário para formatação e apresentação de textos.

* `src/utils/validador.ts`
  Classe responsável pela validação dos dados recebidos da API antes de serem utilizados pelo sistema.

---

## Funcionalidades

* Consulta de Pokémon através da PokeAPI.
* Busca por nome ou ID.
* Tratamento de erros para Pokémon inexistentes.
* Persistência local em arquivo JSON.
* Prevenção de registros duplicados utilizando o ID do Pokémon.
* Listagem de Pokémon armazenados.
* Remoção de Pokémon do catálogo.
* Exibição de informações detalhadas como:

  * Nome
  * ID
  * Tipos
  * Altura
  * Peso
  * HP
  * Attack
  * Special Attack
  * Defense
  * Special Defense
  * Speed
* Utilização de tipagem estática com TypeScript.

---

## Banco de Dados Local

O projeto utiliza um arquivo JSON como mecanismo simples de persistência.

Arquivo:

```txt
pc_box.json
```

O arquivo é inicializado com um array vazio e atualizado automaticamente durante as operações de inclusão e remoção de Pokémon.

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/GeorgeGraciosa/mini-projeto.git
```

Instale as dependências:

```bash
npm install
```

---

## Executando o Projeto

Modo padrão:

```bash
npm run start
```

Modo desenvolvimento:

```bash
npm run dev
```

Após iniciar a aplicação, selecione uma das opções disponíveis:

```txt
1 - Adicionar Pokémon
2 - Listar Pokémon
3 - Buscar Pokémon na API
4 - Deletar Pokémon da lista
0 - Finalizar sistema
```

---

## Scripts Disponíveis

```bash
npm run start
```

Executa a aplicação utilizando TSX.

```bash
npm run dev
```

Executa a aplicação em modo observação (watch).

```bash
npm run build
```

Compila o projeto TypeScript para JavaScript.

```bash
npm run lint
```

Executa a análise estática de código utilizando ESLint.

```bash
npm run lint:fix
```

Corrige automaticamente problemas identificados pelo ESLint quando possível.

---

## Validação

Para verificar se o projeto está compilando corretamente:

```bash
npm run build
```

Para verificar a qualidade do código:

```bash
npm run lint
```

---

## Tecnologias Utilizadas

* TypeScript
* Node.js
* TSX
* ESLint
* Prettier
* PokeAPI
* File System (fs/promises)

import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";

import { adicionarPokemon } from "../services/adicionarPokemon";
import { deletarPokemon } from "../services/deletarPokemon";
import { listarPokemon } from "../services/listarPokemon";
import { buscarPokemon } from "../services/buscarPokemon";

export async function menuController() {
  const interfaceConsole = createInterface(stdin, stdout);

  let opcao: number;

  do {
    const resposta = await interfaceConsole.question(
      "Digite a operação desejada:\n" +
        "1 - Adicionar Pokemon\n" +
        "2 - Listar Pokemons\n" +
        "3 - Busca Pokemon na API\n" +
        "4 - Deletar Pokemon da lista\n" +
        "0 - Finalizar sistema\n\n",
    );

    opcao = Number(resposta);

    if (Number.isNaN(opcao)) {
      console.log("Opção inválida! Digite apenas números.");
      continue;
    }

    switch (opcao) {
      case 1:
        const pokemonInput = await interfaceConsole.question(
          "Digite o id ou o nome do pokémon a ser adicionado:\n",
        );
        await adicionarPokemon(pokemonInput.trim().toLowerCase());
        break;
      case 2:
        await listarPokemon();
        break;
      case 3:
        const encontrarPokemon = await interfaceConsole.question(
          "Digite o id ou o nome do pokémon a ser encontrado na API:\n",
        );
        await buscarPokemon(encontrarPokemon.trim().toLowerCase());
        break;
      case 4:
        const pokemonId = await interfaceConsole.question(
          "Digite o Id do pokémon a ser deletado da lista:\n",
        );
        await deletarPokemon(pokemonId.trim());
        break;
      case 0:
        console.log("Finalizando sistema...");
        break;
      default:
        console.log("Opção inválida, tente digitar uma das opções disponíveis");
        break;
    }
  } while (opcao != 0);

  interfaceConsole.close();
}

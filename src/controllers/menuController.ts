import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";
import { adicionarPokemon } from "../services/adicionarPokemon";
import { listarPokemon } from "../services/listarPokemon";
import { deletarPokemon } from "../services/deletarPokemon";

export async function menuController() {
  const interfaceConsole = createInterface(stdin, stdout);

  let opcao: number;

  do {
    const resposta = await interfaceConsole.question(
      "Digite a operação desejada:\n" +
        "1 - Adicionar Pokemon\n" +
        "2 - Listar Pokemons\n" +
        "3 - Deletar Pokemon da lista\n" +
        "0 - Finalizar sistema\n\n",
    );

    opcao = Number(resposta);

    if (Number.isNaN(opcao)) {
      console.log("Opção inválida! Digite apenas números.");
      continue;
    }

    switch (opcao) {
      case 1:
        await adicionarPokemon();
        break;
      case 2:
        await listarPokemon();
        break;
      case 3:
        await deletarPokemon();
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

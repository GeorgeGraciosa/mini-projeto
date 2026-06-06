import { lerLista } from "./lerLista";
import { salvarLista } from "./salvarLista";
import { PokemonResumo } from "../models/pokemonResumo";
import { capitalize } from "../utils/capitalize";

export async function deletarPokemon(pokemonId: string) {
  const listaBoxPokemon: PokemonResumo[] = await lerLista();

  const id = Number(pokemonId);

  if (Number.isNaN(id)) {
    console.log("[AVISO] ID inválido");
    return;
  }

  const pokemonEncontrado = listaBoxPokemon.find(
    (pokemon) => pokemon.id === id,
  );

  if (!pokemonEncontrado) {
    console.log("[ERRO] Pokémon não encontrado na lista.");
    return;
  }

  const listaAtualizada = listaBoxPokemon.filter(
    (pokemon) => pokemon.id !== id,
  );

  await salvarLista(listaAtualizada);

  console.log(`${pokemonEncontrado.name} foi removido da lista.\n`);
  console.log(
    `Lista atualizada:`,
    listaAtualizada.map(
      (pokemon) =>
        `ID: ${pokemon.id} - Nome: ${capitalize(pokemon.name)} - Tipo: ${pokemon.types.map(capitalize).join(" / ")} - Altura: ${pokemon.height / 10} metros - Peso: ${pokemon.weight / 10} kg`,
    ),
    "\n",
  );
}

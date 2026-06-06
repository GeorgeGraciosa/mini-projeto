import { PokemonResumo } from "../models/pokemonResumo";
import { lerLista } from "./lerLista";
import { salvarLista } from "./salvarLista";

export async function deletarPokemon(pokemonId: string) {
  const listaBoxPokemon: PokemonResumo[] = await lerLista();

  const id = Number(pokemonId);

  if (Number.isNaN(id)) {
    console.log("ID inválido");
    return;
  }

  const pokemonEncontrado = listaBoxPokemon.find(
    (pokemon) => pokemon.id === id,
  );

  if (!pokemonEncontrado) {
    console.log("Pokémon não encontrado na lista.");
    return;
  }

  const listaAtualizada = listaBoxPokemon.filter(
    (pokemon) => pokemon.id !== id,
  );

  await salvarLista(listaAtualizada);

  console.log(`${pokemonEncontrado.name} foi deletado da lista.\n`);
  console.log(
    `Lista atualizada:`,
    listaAtualizada.map(
      (pokemon) =>
        `ID: ${pokemon.id} - Nome: ${pokemon.name} - Tipo: ${pokemon.types.join(" / ")} - Altura: ${pokemon.height} - Peso: ${pokemon.weight}`,
    ),
    "\n",
  );
}

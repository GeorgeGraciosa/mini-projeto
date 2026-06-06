import { PokemonResumo } from "../models/pokemonResumo";
import { lerLista } from "./lerLista";

export async function listarPokemon() {
  const listaBoxPokemon: PokemonResumo[] = await lerLista();
  console.log(
    listaBoxPokemon.map((pokemon) => {
      return `ID: ${pokemon.id} - Nome: ${pokemon.name} - Tipo: ${pokemon.types.join(" / ")} - Altura: ${pokemon.height} - Peso: ${pokemon.weight}`;
    }),
  );
}

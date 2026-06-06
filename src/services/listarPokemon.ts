import { lerLista } from "./lerLista";
import { PokemonResumo } from "../models/pokemonResumo";
import { capitalize } from "../utils/capitalize";

export async function listarPokemon() {
  const listaBoxPokemon: PokemonResumo[] = await lerLista();

  if (listaBoxPokemon.length > 0) {
    console.log(
      listaBoxPokemon.map((pokemon) => {
        return `ID: ${pokemon.id} - Nome: ${capitalize(pokemon.name)} - Tipo: ${pokemon.types.map(capitalize).join(" / ")} - Altura: ${pokemon.height / 10} metros - Peso: ${pokemon.weight / 10} kg`;
      }),
      "\n",
    );
  }
  if (listaBoxPokemon.length === 0) console.log("A box está vazia.\n");
}

import { capitalize } from "../utils/capitalize";
import { validarPokemon } from "./validarPokemon";

export async function buscarPokemon(pokemon: string) {
  if (pokemon === "") {
    console.error("[ERROR] Informe um nome ou ID de Pokémon.");
    return;
  }

  const pokemonBuscado = await validarPokemon(pokemon);

  if (pokemonBuscado !== null) {
    console.log(
      `${capitalize(pokemonBuscado.name)} - ${pokemonBuscado.id}\n` +
        `Tipo: ${pokemonBuscado.types.map(capitalize).join(" / ")}\n` +
        `Altura: ${pokemonBuscado.height / 10} metros\n` +
        `Peso: ${pokemonBuscado.weight / 10} kg\n` +
        `Attack: ${pokemonBuscado.attack}\n` +
        `Special Attack: ${pokemonBuscado.spAttack}\n` +
        `Defense: ${pokemonBuscado.defense}\n` +
        `Special Defense: ${pokemonBuscado.spDefense}\n` +
        `Speed: ${pokemonBuscado.speed}\n`,
    );
  }
}

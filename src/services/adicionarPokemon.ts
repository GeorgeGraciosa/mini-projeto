import { lerLista } from "./lerLista";
import { salvarLista } from "./salvarLista";
import { validarPokemon } from "./validarPokemon";
import { PokemonResumo } from "../models/pokemonResumo";
import { capitalize } from "../utils/capitalize";

export async function adicionarPokemon(pokemon: string) {
  const pokemons: PokemonResumo[] = (await lerLista()) || [];

  const pokemonEncontrado = await validarPokemon(pokemon);

  if (pokemonEncontrado === null) {
    console.log("[ERRO] Pokémon não encontrado");
    return;
  }

  if (
    pokemons.some((item) => {
      return item.id === pokemonEncontrado.id;
    })
  ) {
    console.log(
      "[AVISO] Não foi possível adicionar porque este Pokémon já existe na lista.",
    );
    return;
  }

  pokemons.push(pokemonEncontrado);

  try {
    await salvarLista(pokemons);
    console.log(
      `${capitalize(pokemonEncontrado.name)} foi adicionado à box!\n` +
        `Dados: \n` +
        `Tipo: ${pokemonEncontrado.types.map(capitalize).join(" / ")}\n` +
        `Altura: ${pokemonEncontrado.height / 10} metros\n` +
        `Peso: ${pokemonEncontrado.weight / 10} kg\n` +
        `Attack: ${pokemonEncontrado.attack}\n` +
        `Special Attack: ${pokemonEncontrado.spAttack}\n` +
        `Defense: ${pokemonEncontrado.defense}\n` +
        `Special Defense: ${pokemonEncontrado.spDefense}\n` +
        `Speed: ${pokemonEncontrado.speed}\n`,
    );
  } catch (error) {
    console.error("[ERRO] Erro ao salvar o pokémon na database.");
  }
}

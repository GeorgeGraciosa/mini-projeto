import { PokemonResumo } from "../models/pokemonResumo";
import { lerLista } from "./lerLista";
import { validarPokemon } from "./validarPokemon";
import { salvarLista } from "./salvarLista";

export async function adicionarPokemon(pokemon: string) {
  const pokemons: PokemonResumo[] = (await lerLista()) || [];

  const pokemonEncontrado = await validarPokemon(pokemon);

  if (pokemonEncontrado === null) {
    console.log("Pokémon não encontrado");
    return;
  }

  if (
    pokemons.some((item) => {
      return item.id === pokemonEncontrado.id;
    })
  ) {
    console.log(
      "Não foi possível adicionar porque este Pokémon já existe na lista.",
    );
    return;
  }

  pokemons.push(pokemonEncontrado);

  try {
    await salvarLista(pokemons);
    console.log(
      `${pokemonEncontrado.name} foi adicionado à box!\n` +
        `Dados: \n` +
        `Tipo: ${pokemonEncontrado.types.join(" / ")}\n` +
        `Altura: ${pokemonEncontrado.height}\n` +
        `Peso: ${pokemonEncontrado.weight}\n` +
        `Attack: ${pokemonEncontrado.attack}\n` +
        `Special Attack: ${pokemonEncontrado.spAttack}\n` +
        `Defense: ${pokemonEncontrado.defense}\n` +
        `Special Defense: ${pokemonEncontrado.spDefense}\n` +
        `Speed: ${pokemonEncontrado.speed}\n`,
    );
  } catch (error) {
    console.error("Erro ao salvar o pokémon na database.");
  }
}

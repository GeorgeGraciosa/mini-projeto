import { PokemonResumo } from "../models/pokemonResumo";
import { Validador } from "../utils/validador";

export async function validarPokemon(
  pokemon: string,
): Promise<PokemonResumo | null> {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const resposta = await fetch(url);

    switch (resposta.status) {
      case 200:
        return Validador.validade(await resposta.json());
      case 400:
        throw new Error("Requisição inválida");
      case 404:
        throw new Error(`Pokémon ${pokemon} não encontrado na API`);
      default:
        throw new Error(
          `Não foi possível buscar o pokémon na API ${resposta.status}${resposta.statusText}`,
        );
    }
  } catch (error) {
    console.log("Falha pela busca do pokémon na API");
    return null;
  }
}

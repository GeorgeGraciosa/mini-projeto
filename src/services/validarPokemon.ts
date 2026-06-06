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
        return Validador.validar(await resposta.json());
      case 400:
        throw new Error("[ERRO] Requisição inválida");
      case 404:
        throw new Error(`[ERRO] Pokémon ${pokemon} não encontrado na API`);
      default:
        throw new Error(
          `[ERRO] Não foi possível buscar o pokémon na API ${resposta.status} ${resposta.statusText}`,
        );
    }
  } catch (error) {
    console.log("[ERRO] Falha pela busca do pokémon na API");
    return null;
  }
}

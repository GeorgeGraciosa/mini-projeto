import { writeFile } from "node:fs/promises";
import { PokemonResumo } from "../models/pokemonResumo";

export async function salvarLista(pokemons: PokemonResumo[]) {
  await writeFile("./pc_box.json", JSON.stringify(pokemons), {
    encoding: "utf-8",
  });
}

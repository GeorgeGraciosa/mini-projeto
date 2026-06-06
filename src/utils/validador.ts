import { PokemonResumo } from "../models/pokemonResumo";

export class Validador {
  private static isObject(value: unknown): value is object {
    return typeof value === "object" && value !== null;
  }

  private static isString(value: unknown): value is string {
    return typeof value === "string";
  }

  private static isNumber(value: unknown): value is number {
    return typeof value === "number";
  }

  static validar(value: unknown): PokemonResumo {
    if (!this.isObject(value)) {
      throw new Error("Type error");
    }

    if (!("name" in value)) {
      throw new Error("[ERRO] Type error");
    }

    if (!("id" in value)) {
      throw new Error("[ERRO] Type error");
    }

    if (!("height" in value)) {
      throw new Error("[ERRO] Type error");
    }

    if (!("weight" in value)) {
      throw new Error("[ERRO] Type error");
    }

    if (!("types" in value)) {
      throw new Error("[ERRO] Type error");
    }

    if (!("stats" in value)) {
      throw new Error("[ERRO] Type error");
    }

    if (!Array.isArray(value.types)) {
      throw new Error("[ERRO] Type error");
    }

    if (!Array.isArray(value.stats)) {
      throw new Error("[ERRO] Type error");
    }

    if (!this.isString(value.name)) {
      throw new Error("[ERRO] Type error");
    }

    if (!this.isNumber(value.id)) {
      throw new Error("[ERRO] Type error");
    }

    if (!this.isNumber(value.height)) {
      throw new Error("[ERRO] Type error");
    }

    if (!this.isNumber(value.weight)) {
      throw new Error("[ERRO] Type error");
    }

    return {
      id: value.id,
      name: value.name,
      types: value.types.map((item) => item.type.name),
      height: value.height,
      weight: value.weight,
      hp: value.stats.find((item) => item.stat.name === "hp")?.base_stat ?? 0,
      attack:
        value.stats.find((item) => item.stat.name === "attack")?.base_stat ?? 0,
      spAttack:
        value.stats.find((item) => item.stat.name === "special-attack")
          ?.base_stat ?? 0,
      defense:
        value.stats.find((item) => item.stat.name === "defense")?.base_stat ??
        0,
      spDefense:
        value.stats.find((item) => item.stat.name === "special-defense")
          ?.base_stat ?? 0,
      speed:
        value.stats.find((item) => item.stat.name === "speed")?.base_stat ?? 0,
    };
  }
}

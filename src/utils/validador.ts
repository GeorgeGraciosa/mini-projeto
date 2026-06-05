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

  static validade(value: unknown): PokemonResumo {
    if (!this.isObject(value)) {
      throw new Error("Type error");
    }

    if (!("name" in value)) {
      throw new Error("Type error");
    }

    if (!("id" in value)) {
      throw new Error("Type error");
    }

    if (!this.isString(value.name)) {
      throw new Error("Type error");
    }

    if (!this.isNumber(value.id)) {
      throw new Error("Type error");
    }

    return {
      id: value.id,
      name: value.name,
      types: [],
      hp: 0,
      attack: 0,
      spAttack: 0,
      defense: 0,
      spDefense: 0,
      speed: 0,
    };
  }
}

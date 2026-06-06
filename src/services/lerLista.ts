import { readFile } from "node:fs/promises";

export async function lerLista() {
  try {
    const arquivo = await readFile("./pc_box.json", { encoding: "utf-8" });
    return JSON.parse(arquivo);
  } catch (error) {
    console.error("Arquivo corrompido ou vazio, não foi possível ler os dados");
  }
}

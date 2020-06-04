import Knex from "knex";
export async function seed(knex: Knex) {
  await knex("items").insert([
    { title: "Lãmpadas", image: "lampadas.svg" },
    { title: "Pilhas e Baterias", image: "baterias.svg" },
    { title: "Papel e Papelão", image: "papel-papelao.svg" },
    { title: "Resíduos Eletrônicos", image: "eletronico.svg" },
    { title: "Resíduos Orgânicos", image: "organicos.svg" },
    { title: "Óleo de Cozinha", image: "oleo.svg" },
  ]);
}

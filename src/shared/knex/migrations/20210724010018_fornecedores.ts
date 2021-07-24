import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('fornecedores', (table) => {
    table.increments('id').primary().notNullable();
    table.string('nome').notNullable();
    table.string('razao_social').notNullable();
    table.string('cnpj').notNullable().unique();
    table.string('segmento').notNullable();
    table.string('telefone').notNullable();
    table.string('email').notNullable().unique();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('fornecedores');
}

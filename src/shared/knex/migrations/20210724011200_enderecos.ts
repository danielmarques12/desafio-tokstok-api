import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('enderecos', (table) => {
    table.increments('id').primary().notNullable();
    table.string('cep').notNullable();
    table.string('rua').notNullable();
    table.string('numero').notNullable();
    table.string('complemento');
    table
      .integer('fornecedor_id')
      .notNullable()
      .references('id')
      .inTable('fornecedores')
      .onUpdate('set null')
      .onDelete('set null');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('enderecos');
}

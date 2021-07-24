import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('produtos', (table) => {
    table.increments('id').primary().notNullable();
    table.string('nome').notNullable();
    table.string('descricao').notNullable();
    table.string('image_url').notNullable();
    table.float('preco').notNullable();
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
  return knex.schema.dropTable('produtos');
}

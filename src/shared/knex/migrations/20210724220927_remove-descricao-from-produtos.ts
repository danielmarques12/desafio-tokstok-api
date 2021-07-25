import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('produtos', (table) => {
    table.dropColumn('descricao');
  });
}
export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('produtos', (table) => {
    table.string('descricao').notNullable();
  });
}

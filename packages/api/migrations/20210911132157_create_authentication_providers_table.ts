import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('authentication_providers', table => {
    table.increments('id').primary();
    table.string('provider_key');
    table.string('provider_type');
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id').onDelete('cascade');
    table.timestamps();
  });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('authentication_providers')
}

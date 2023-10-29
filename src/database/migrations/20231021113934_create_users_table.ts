import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.timestamps(true, true, true);
      });
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('users');
}


import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('offers', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.decimal('value').notNullable();
        table.boolean('isFavorite').notNullable().defaultTo(false);
        table.timestamps(true, true, true);
      });
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('offers');
}


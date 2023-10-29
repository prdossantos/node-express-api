import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("offers").del();

    await knex("offers").insert([
        {name: 'BTCUSD', value: 10, isFavorite: false, createdAt: new Date('2023-10-28 09:00:00'), updatedAt: new Date('2023-10-28 09:00:00')},
        {name: 'BTCUSD', value: 20, isFavorite: false, createdAt: new Date('2023-10-29 09:00:00'), updatedAt: new Date('2023-10-29 09:00:00')},
        {name: 'BTCUSD', value: 30, isFavorite: false, createdAt: new Date('2023-10-30 09:00:00'), updatedAt: new Date('2023-10-30 09:00:00')},
    ]);
};

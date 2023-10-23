import { Knex } from "knex";
import bcrypt from 'bcrypt';

export async function seed(knex: Knex): Promise<void> {
    await knex("users").del();

    const password = await bcrypt.hash('password', 10);

    await knex("users").insert([
        {email: 'root@api.com', password}
    ]);
};

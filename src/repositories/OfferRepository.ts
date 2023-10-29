import { Offer } from '../entities/Offer';
import { IOfferRepository } from './IOfferRepository';
import { connectToDatabase } from '../database/database';
import { ResultSetHeader } from 'mysql2';

export class OfferRepository implements IOfferRepository {
    async create({name, value}: any): Promise<Offer | null> {
        const connection = await connectToDatabase();
        const [ result ]: any = await connection.query('INSERT INTO offers SET ?', {name, value});
        return this.getById(Number(result.insertId))
    }

    async favorite(offerId: number): Promise<Offer | null> {
        const connection = await connectToDatabase();

        await connection.query('UPDATE offers SET isFavorite = true WHERE id = ?', [offerId]);
    
        return this.getById(offerId);
    }

    async delete(offerId: number): Promise<Offer | null> {
        const connection = await connectToDatabase();
        await connection.query('DELETE from offers WHERE id = ?', [offerId]);
       
        return null;
    }

    async list(): Promise<Offer[] | []> {
        const connection = await connectToDatabase();
        const [rows]: any = await connection.query('SELECT * FROM offers ORDER BY createdAt DESC');
       
        return rows;
    }

    async getById(offerId: number): Promise<Offer | null> {
        const connection = await connectToDatabase();
        const [rows]: any = await connection.query('SELECT * FROM offers where id = ? ORDER BY 1 DESC', [offerId]);
       
        return rows.length ? rows[0] : null;
    }
}

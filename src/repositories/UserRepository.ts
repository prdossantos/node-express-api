import { User } from '../entities/User';
import { IUserRepository } from './IUserRepository';
import { connectToDatabase } from '../database/database';

export class UserRepository implements IUserRepository {

    async findByEmail(email: string): Promise<User | null> {
        const connection = await connectToDatabase();
        const [rows]: any = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
       
        if (rows.length) {
            const user = new User(rows[0].id, rows[0].email, rows[0].password);
            return user;
        }
        return null;
    }
}

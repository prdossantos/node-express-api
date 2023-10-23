import { Request, Response } from 'express';
import { LoginUseCase } from '../use-cases/LoginUseCase';
import { UserRepository } from '../repositories/UserRepository';

export class LoginController {
    async handle(req: Request, res: Response): Promise<Response> {
        const loginUseCase = new LoginUseCase(new UserRepository());
        const { email, password } = req.body;
        const user = await loginUseCase.execute(email, password);
        if (user) {
            return res.status(200).json(user);
        }
        return res.status(400).json({ error: 'Invalid credentials' });
    }
}

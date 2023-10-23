import { Router } from 'express';
import { LoginController } from '../controllers/LoginController';
import { UserRepository } from '../repositories/UserRepository';
import { LoginUseCase } from '../use-cases/LoginUseCase';
import { jwtGuard } from '../middleware/jwt.guard';

const router = Router();

const loginController = new LoginController();

/**
 * @swagger
 * /v1/login:
 *   post:
 *     summary: Login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Retorna detalhes do usuário e JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     email:
 *                       type: string
 *                 token:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post('/v1/login', loginController.handle);

export default router;

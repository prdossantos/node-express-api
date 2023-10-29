import { Router } from 'express';
import { OffersController } from '../controllers/OffersController';

const router = Router();

const offeresController = new OffersController();

/**
 * @swagger
 * /v1/offers:
 *   post:
 *     summary: Criar uma nova oferta
 *     tags: [Offers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               value:
 *                 type: number
 *     responses:
 *       200:
 *         description: Retorna a oferta criada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number 
 *                 name:
 *                   type: string
 *                 value:
 *                   type: number
 *                 isFavorite:
 *                   type: number
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
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
router.post('/v1/offers', offeresController.create);


/**
 * @swagger
 * /v1/offers/{id}:
 *   put:
 *     summary: Adiciona aos favoritos
 *     tags: [Offers]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: integer
 *        minimum: 1
 *        description: ID da oferta.
 *     responses:
 *       200:
 *         description: Retorna a oferta atualizada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number 
 *                 name:
 *                   type: string
 *                 value:
 *                   type: number
 *                 isFavorite:
 *                   type: number
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
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
router.put('/v1/offers/:id', offeresController.favorite);

/**
 * @swagger
 * /v1/offers/{id}:
 *   delete:
 *     summary: Exclui a oferta
 *     tags: [Offers]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: integer
 *        minimum: 1
 *        description: ID da oferta.
 *     responses:
 *       200:
 *         description: Retorna vazio com status 200
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
router.delete('/v1/offers/:id', offeresController.delete);

/**
 * @swagger
 * /v1/offers:
 *   get:
 *     summary: Lista todas as ofertas
 *     tags: [Offers]
 *     responses:
 *       200:
 *         description: Retorna todas as ofertas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number 
 *                   name:
 *                     type: string
 *                   value:
 *                     type: number
 *                   isFavorite:
 *                     type: number
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
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
router.get('/v1/offers', offeresController.list);

export default router;

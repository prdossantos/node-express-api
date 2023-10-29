import { Request, Response } from 'express';
import { CreateOfferUseCase } from '../use-cases/CreateOfferUseCase';
import { OfferRepository } from '../repositories/OfferRepository';
import { FavoriteOfferUseCase } from '../use-cases/FavoriteOfferUseCase';
import { DeleteOfferUseCase } from '../use-cases/DeleteOfferUseCase';
import { ListOffersUseCase } from '../use-cases/ListOffersUseCase';

export class OffersController {
    async create(req: Request, res: Response): Promise<Response> {
        const useCase = new CreateOfferUseCase(new OfferRepository());
        const offer = await useCase.execute(req.body);
        if (offer) {
            return res.status(200).json(offer);
        }
        return res.status(400).json({ error: 'Error when trying to create a new offer, try later!' });
    }
    async favorite(req: Request, res: Response): Promise<Response> {
        const useCase = new FavoriteOfferUseCase(new OfferRepository());
        const offer = await useCase.execute(Number(req.params.id));
        if (offer) {
            return res.status(200).json(offer);
        }
        return res.status(400).json({ error: 'Error when trying to favorite, try later!' });
    }
    async delete(req: Request, res: Response): Promise<Response> {
        const useCase = new DeleteOfferUseCase(new OfferRepository());
        await useCase.execute(Number(req.params.id));
        
        return res.status(200).json();
    }
    async list(req: Request, res: Response): Promise<Response> {
        const useCase = new ListOffersUseCase(new OfferRepository());
        const offers =  await useCase.execute();
        return res.status(200).json(offers);
    }
}

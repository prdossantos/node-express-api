import { Offer } from '../entities/Offer';

export interface IOfferRepository {
    create(offer: any): Promise<Offer | null>;
    favorite(offerId: number): Promise<Offer | null>;
    delete(offerId: number): Promise<Offer | null>;
    list(): Promise<Offer[] | []>;
}


import { OfferRepository } from '../repositories/OfferRepository';

export class FavoriteOfferUseCase {
  constructor(private repository: OfferRepository) {}

  async execute(offerId: number) {
    try {
      return await this.repository.favorite(offerId);
    } catch (error: any) {
      console.error(error);
      throw new Error(error?.message);
    }
  }
}

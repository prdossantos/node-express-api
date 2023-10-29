import { OfferRepository } from '../repositories/OfferRepository';

export class DeleteOfferUseCase {
  constructor(private repository: OfferRepository) {}

  async execute(offerId: number) {
    try {
      await this.repository.delete(offerId);
      return;
    } catch (error: any) {
      console.error(error);
      throw new Error(error?.message);
    }
  }
}

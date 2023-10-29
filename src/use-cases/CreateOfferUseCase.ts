import { OfferRepository } from '../repositories/OfferRepository';

export class CreateOfferUseCase {
  constructor(private repository: OfferRepository) {}

  async execute(offer: any) {
    try {
      return await this.repository.create(offer);
    } catch (error: any) {
      console.error(error)
      throw new Error(error?.message)
    }
    
  }
}

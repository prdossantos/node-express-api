import { OfferRepository } from "../repositories/OfferRepository";


export class ListOffersUseCase {
  constructor(private repository: OfferRepository) {}

  async execute() {
    return await this.repository.list();
  }
}

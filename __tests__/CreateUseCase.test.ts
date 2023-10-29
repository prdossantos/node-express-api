import { CreateOfferUseCase } from '../src/use-cases/CreateOfferUseCase';
import { OfferRepository } from '../src/repositories/OfferRepository';
import { Offer } from '../src/entities/Offer';

jest.mock('../src/repositories/OfferRepository');
jest.mock('bcrypt');

describe('CreateOfferUseCase', () => {
  let repository: OfferRepository;
  let useCase: CreateOfferUseCase;

  beforeEach(() => {
    repository = new OfferRepository();
    useCase = new CreateOfferUseCase(repository);
  });

  it('should return an offer created', async () => {
    const mockOffer = new Offer(1, 'BTC', '10', false, '2023-10-29', '2023-10-29');
    (repository.create as jest.Mock).mockResolvedValue(mockOffer);

    
    const response = await useCase.execute({name: 'BTC', value: '10'});

    expect(response).toEqual(mockOffer);
    expect(repository.create).toHaveBeenCalledWith({name: 'BTC', value: '10'});
  });
});

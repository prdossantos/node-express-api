import bcrypt from 'bcrypt';
import { LoginUseCase } from '../src/use-cases/LoginUseCase';
import { UserRepository } from '../src/repositories/UserRepository';
import { User } from '../src/entities/User';

jest.mock('../src/repositories/UserRepository');
jest.mock('bcrypt');

describe('LoginUseCase', () => {
  let userRepository: UserRepository;
  let loginUseCase: LoginUseCase;

  beforeEach(() => {
    userRepository = new UserRepository();
    loginUseCase = new LoginUseCase(userRepository);
  });

  it('should return user if credentials are valid', async () => {
    const mockUser = new User(1, 'root@api.com', 'password');
    (userRepository.findByEmail as jest.Mock).mockResolvedValue(mockUser);

    
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);

    const response = await loginUseCase.execute('root@api.com', 'password');

    expect(response?.user).toEqual(mockUser);
    expect(userRepository.findByEmail).toHaveBeenCalledWith('root@api.com');
    expect(bcrypt.compare).toHaveBeenCalledWith('password', 'password');
  });

  it('should return null if credentials are invalid', async () => {
    (userRepository.findByEmail as jest.Mock).mockResolvedValue(null);

    // You might also want to mock bcrypt.compare to return false in scenarios where email is correct but password isn't
    (bcrypt.compare as jest.Mock).mockResolvedValue(false);

    const user = await loginUseCase.execute('wronguser', 'wrongpassword');

    expect(user).toBeNull();
  });
});

import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateClientUseCase = new AuthenticateUserUseCase();

    const result = await authenticateClientUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}

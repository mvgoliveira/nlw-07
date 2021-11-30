import { Request, Response } from "express";
import { AuthenticationUserService } from "../services/AuthenticationUserService";

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { code } = req.body;

    const service = new AuthenticationUserService();

    try {
      const result = await service.execute(code);
      return res.json(result);
    } catch (error) {
      return res.status(400).json({error: error.message});
    }
  }
}

export { AuthenticateUserController }
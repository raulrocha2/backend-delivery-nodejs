import { Request, Response } from "express";
import { FindDeliveriesUseCase } from "./FindDeliveriesUseCase";

export class FindDeliveriesController {
  async handle(req: Request, res: Response) {
    const id_client = req.user.id;

    const findDeliveriesUseCase = new FindDeliveriesUseCase();

    const result = await findDeliveriesUseCase.execute({
      id_client
    });

    return res.json(result);
  }
}
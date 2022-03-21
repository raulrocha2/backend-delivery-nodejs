import { Request, Response } from "express";
import { FindDeliveriesUseCase } from "./FindDeliveriesUseCase";


export class FindDeliveriesController {
  async handle(req: Request, res: Response) {
    const id_deliveryman = req.user.id;

    const findDeliveriesUseCase = new FindDeliveriesUseCase();

    const result = await findDeliveriesUseCase.execute({
      id_deliveryman
    });

    return res.json(result);
  }
}
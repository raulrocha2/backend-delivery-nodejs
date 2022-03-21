import { json, Request, Response } from "express";
import { FindAvailableDeliveriesUseCase } from "./FindAvailableDeliveriesUseCase";

export class FindAvailableDeliveriesController {
  async handle(req: Request, res: Response) {
    const findAllWithoutEndDateUseCase = new FindAvailableDeliveriesUseCase();

    const result = await findAllWithoutEndDateUseCase.execute();

    return res.json(result);
  }
}
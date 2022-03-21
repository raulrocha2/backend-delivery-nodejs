import { json, Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";


export class UpdateDeliverymanController {
  async handle(req: Request, res: Response) {
    const { id_delivery } = req.params;
    const id_deliveryman = req.user.id;

    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();

    const result = await updateDeliverymanUseCase.execute({
      id_delivery,
      id_deliveryman
    })

    return res.json(result);
  }
}
import { prisma } from "../../../../database/prismaClient";

interface IUpdateDeliveryman {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateDeliveryman) {

    const deliveryExists = await prisma.deliveries.findFirst({
      where: {
        id: id_delivery
      }
    });

    if (!deliveryExists) {
      throw new Error("Delivery not found!")
    }

    const deliveryUpdate = await prisma.deliveries.update({
      where: {
        id: id_delivery
      },
      data: {
        id_deliveryman
      }
    });

    return deliveryUpdate;

  }
}
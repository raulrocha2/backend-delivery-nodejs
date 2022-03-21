import { prisma } from "../../../../database/prismaClient";


interface IUpdateEndDate {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateEndDateUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateEndDate) {

    const deliveryExists = await prisma.deliveries.findFirst({
      where: {
        id: id_delivery,
        id_deliveryman
      }
    });

    if (!deliveryExists) {
      throw new Error("Delivery not found!")
    }

    const deliveryUpdate = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman
      },
      data: {
        end_at: new Date(),
      }
    });

    return deliveryUpdate;
  }
}
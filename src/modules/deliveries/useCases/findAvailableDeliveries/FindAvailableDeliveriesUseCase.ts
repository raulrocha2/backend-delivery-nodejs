import { prisma } from "../../../../database/prismaClient";


export class FindAvailableDeliveriesUseCase {
  async execute() {

    const availableDeliveries = await prisma.deliveries.findMany({
      where: {
        id_deliveryman: null
      }
    });

    return availableDeliveries;

  }
}
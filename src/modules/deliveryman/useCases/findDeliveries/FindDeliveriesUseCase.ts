import { prisma } from "../../../../database/prismaClient";

interface IRequest {
  id_deliveryman: string;
}

export class FindDeliveriesUseCase {
  async execute({ id_deliveryman }: IRequest) {

    const clientDelivery = await prisma.deliveryman.findMany({
      where: {
        id: id_deliveryman
      },
      select: {
        id: true,
        username: true,
        deliveries: true
      }
    });

    return clientDelivery;
  }
}
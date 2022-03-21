import { prisma } from "../../../../database/prismaClient";


interface IRequest {
  id_client: string;
}

export class FindDeliveriesUseCase {
  async execute({ id_client }: IRequest) {

    const clientDelivery = await prisma.clients.findMany({
      where: {
        id: id_client
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
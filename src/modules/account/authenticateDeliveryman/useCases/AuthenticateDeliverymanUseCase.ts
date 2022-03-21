import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import auth from "../../../../config/auth";
import { prisma } from "../../../../database/prismaClient";

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: {
    username: string;
  },
  token: string
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IRequest) {

    const user = await prisma.deliveryman.findUnique({
      where: {
        username
      }
    });

    if (!user) {
      throw new Error('Username or password invalid !')
    }

    const passwordMath = await compare(password, user.password);

    if (!passwordMath) {
      throw new Error('Username or password invalid !')
    }

    const token = sign({ username }, auth.secret_token, {
      subject: user.id,
      expiresIn: auth.expires_in_token
    });

    const clientReturn: IResponse = {
      user: {
        username: user.username
      },
      token
    }
    return clientReturn;
  }
}
import { Router } from "express";
import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";
import { AuthenticateClientController } from '../modules/account/authenticateClient/useCases/AuthenticateClientController'
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { FindDeliveriesController } from "../modules/clients/useCases/findDeliveries/FindDeliveriesController";

const clientRoutes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findDeliveriesController = new FindDeliveriesController();

clientRoutes.post('/new', createClientController.handle);
clientRoutes.post('/login', authenticateClientController.handle);
clientRoutes.get('/deliveries', ensureAuthenticate, findDeliveriesController.handle);

export { clientRoutes };
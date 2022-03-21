import { Router } from "express";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { AuthenticateDeliverymanController } from "../modules/account/authenticateDeliveryman/useCases/AuthenticateDeliverymanController";
import { CreateDeliverymanController } from "../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindDeliveriesController } from "../modules/deliveryman/useCases/findDeliveries/FindDeliveriesController";

const deliverymanRoutes = Router();

const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliverymanController = new CreateDeliverymanController();
const findDeliveriesController = new FindDeliveriesController();

deliverymanRoutes.post('/new', createDeliverymanController.handle);
deliverymanRoutes.post('/login', authenticateDeliverymanController.handle);
deliverymanRoutes.get('/deliveries', ensureAuthenticate, findDeliveriesController.handle);

export { deliverymanRoutes };
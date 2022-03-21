import { Router } from "express";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { CreateDeliveryController } from "../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAvailableDeliveriesController } from "../modules/deliveries/useCases/findAvailableDeliveries/FindAvailableDeliveriesController";
import { UpdateDeliverymanController } from "../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanCotroller";
import { UpdateEndDateController } from "../modules/deliveries/useCases/updateEndDate/UpdateEndDateController";

const deliveriesRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAvailableDeliveriesController = new FindAvailableDeliveriesController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

deliveriesRoutes.post('/new', ensureAuthenticate, createDeliveryController.handle);
deliveriesRoutes.get('/available', ensureAuthenticate, findAvailableDeliveriesController.handle);
deliveriesRoutes.put('/update-deliveryman/:id_delivery', ensureAuthenticate, updateDeliverymanController.handle)
deliveriesRoutes.put('/update-end-date/:id_delivery', ensureAuthenticate, updateEndDateController.handle)

export { deliveriesRoutes };
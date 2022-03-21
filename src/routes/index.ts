import { Router } from "express";
import { deliverymanRoutes } from "../routes/deliveryman.routes";
import { clientRoutes } from "../routes/client.routes";
import { deliveriesRoutes } from "../routes/deliveries.routes";
const routes = Router();

routes.use("/deliveryman", deliverymanRoutes);
routes.use("/client", clientRoutes);
routes.use("/deliveries", deliveriesRoutes);

export { routes };
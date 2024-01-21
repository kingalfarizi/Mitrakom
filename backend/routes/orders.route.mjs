import { Router } from "express";
import { createOrder } from "../controllers/orders.controller.mjs";

const ordersRouter = Router();

ordersRouter.get('/', () => {});

ordersRouter.post('/', createOrder);

ordersRouter.put('/:id', () => {});

ordersRouter.delete('/:id', () => {});

export default ordersRouter;
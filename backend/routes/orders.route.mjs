import { Router } from "express";
import { createOrder, getOrderByUserId } from "../controllers/orders.controller.mjs";

const ordersRouter = Router();

ordersRouter.get('/', () => {});

ordersRouter.post('/', createOrder);

ordersRouter.get('/user/:id', getOrderByUserId)

ordersRouter.put('/:id', () => {});

ordersRouter.delete('/:id', () => {});

export default ordersRouter;
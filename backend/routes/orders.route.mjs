import { Router } from "express";
import { createOrder, getAllOrders, getOrderByUserId } from "../controllers/orders.controller.mjs";

const ordersRouter = Router();

ordersRouter.get('/', getAllOrders);

ordersRouter.post('/', createOrder);

ordersRouter.get('/user/:id', getOrderByUserId)

ordersRouter.put('/:id', () => {});

ordersRouter.delete('/:id', () => {});

export default ordersRouter;
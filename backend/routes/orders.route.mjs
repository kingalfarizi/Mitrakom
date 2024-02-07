import { Router } from "express";
import { createOrder, getAllOrders, getOrderById, getOrderByUserId } from "../controllers/orders.controller.mjs";

const ordersRouter = Router();

ordersRouter.get('/', getAllOrders);

ordersRouter.post('/', createOrder);

ordersRouter.get('/user/:id', getOrderByUserId)

ordersRouter.get('/:id', getOrderById);

ordersRouter.put('/:id', () => {});

ordersRouter.delete('/:id', () => {});

export default ordersRouter;
import * as orderServices from "../services/orders.service.mjs";

export const createOrder = (req, res) => {
  const order = req.body;
  orderServices
    .createOrder(order)
    .then(() => {
      res.status(200).json({
        message: "Order created",
        data: order,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

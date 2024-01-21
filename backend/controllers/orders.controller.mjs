import * as orderServices from "../services/orders.service.mjs";

export const createOrder = (req, res) => {
  const order = req.body;
  orderServices
    .createOrder(order)
    .then((data) => {
      res.status(200).json({
        message: "Order created",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

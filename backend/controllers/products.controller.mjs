import * as productServices from "../services/products.service.mjs";

export const getProducts = (req, res) => {
  productServices
    .getAllProducts()
    .then((result) => {
      res.status(200).json({
        message: "Products retrieved",
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const createProduct = (req, res) => {
  const product = req.body;

  productServices
    .createProduct(product)
    .then((result) => {
      res.status(201).json({
        message: "Product created",
        data: product,
      });
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

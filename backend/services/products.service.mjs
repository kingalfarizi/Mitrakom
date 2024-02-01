import cloudinary from "../config/cloudinary.mjs";
import sql from "../config/sql.mjs";
import { v4 as uuidv4 } from "uuid";

export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM `Barangs` ORDER BY createdAt DESC";

    sql
      .execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const createProduct = (product) => {
  return new Promise((resolve, reject) => {
    const { id = uuidv4(), name, desc, price, category, image } = product;

    cloudinary.uploader
      .upload(image, {
        folder: "mitrakom",
      })
      .then((result) => {
        const query = `INSERT INTO Barangs (id, ItemName, ItemDesc, ItemPrice, Category, ItemImg) VALUES (?, ?, ?, ?, ?, ?)`;
        const params = [id, name, desc, price, category, result.secure_url];

        sql
          .execute(query, [...params])
          .then((result) => resolve(result))
          .catch((err) => reject(err));
      });
  });
};

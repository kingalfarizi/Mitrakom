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
  return new Promise(async (resolve, reject) => {
    const { id = uuidv4(), nama, deskripsi, harga, kategori, image } = product;

    // const query = `INSERT INTO Barangs (id, ItemName, ItemDesc, ItemPrice, Category, ItemImg) VALUES (?, ?, ?, ?, ?, ?)`;
    // const params = [id, nama, deskripsi, harga, kategori, "image"];
    // // console.log(params);

    // sql
    //   .execute(query, [...params])
    //   .then((result) => resolve(result))
    //   .catch((err) => reject(err));

    cloudinary.uploader.upload(
      image,
      {
        folder: "mitrakom",
      },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          const query = `INSERT INTO Barangs (id, ItemName, ItemDesc, ItemPrice, Category, ItemImg) VALUES (?, ?, ?, ?, ?, ?)`;
          const params = [
            id,
            nama,
            deskripsi,
            harga,
            kategori,
            result.secure_url,
          ];
          // console.log(params);
          sql
            .execute(query, [...params])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
        }
      }
    );
  });
};

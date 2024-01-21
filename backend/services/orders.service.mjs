import sql from "../config/sql.mjs";
import { v4 as uuidv4 } from "uuid";

export const createOrder = (order) => {
  return new Promise((resolve, reject) => {
    const {
      id = uuidv4(),
      idUser,
      barang,
      metodePengiriman,
      metodePembayaran,
      idCard,
      promoCode,
      status = "pending",
    } = order;
    const query =
      "INSERT INTO orders (id, idUser, idBarang, kuantitas, metodePengiriman, metodePembayaran, idCard, promoCode, subTotal, statusOrder) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    let params;

    let subTotal = barang.reduce((total, item) => {
      return total + item.quantity * item.ItemPrice;
    }, 0);

    subTotal *= 1000;

    if (barang.length > 1) {
      // Jika panjang idBarang lebih dari 1, gunakan map atau forEach untuk membuat params
      params = barang.map((item) => [
        id,
        idUser,
        item.id,
        item.quantity,
        metodePengiriman,
        metodePembayaran,
        idCard || null,
        promoCode || null,
        subTotal,
        status,
      ]);
    } else {
      // Jika panjang idBarang hanya 1, buat params seperti biasa
      params = [
        id,
        idUser,
        barang[0].id, // Mengambil idBarang pertama jika panjangnya hanya 1
        barang[0].quantity,
        metodePengiriman,
        metodePembayaran,
        idCard || null,
        promoCode || null,
        subTotal,
        status,
      ];
    }

    // return resolve(params);

    sql
      .execute(query, [...params])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

import sql from "../config/sql.mjs";

export const createOrder = (order) => {
  return new Promise((resolve, reject) => {
    const {
      id,
      idBarang,
      kuantitas,
      metodePengiriman,
      metodePembayaran,
      idCard,
      promoCode,
      subTotal,
      status = "pending",
    } = order;
    const query =
      "INSERT INTO orders (id, idBarang, kuantitas, metodePengiriman, metodePembayaran, idCard, promoCode, subTotal, status) VALUES (?, ?, ?, ?, ?, ?)";
    let params;
    if (idBarang.length > 1) {
      // Jika panjang idBarang lebih dari 1, gunakan map atau forEach untuk membuat params
      params = idBarang.map((barangId) => [
        id,
        barangId,
        kuantitas,
        metodePengiriman,
        metodePembayaran,
        idCard,
        promoCode,
        subTotal,
        status,
      ]);
    } else {
      // Jika panjang idBarang hanya 1, buat params seperti biasa
      params = [
        id,
        idBarang[0], // Mengambil idBarang pertama jika panjangnya hanya 1
        kuantitas,
        metodePengiriman,
        metodePembayaran,
        idCard,
        promoCode,
        subTotal,
        status,
      ];
    }

    sql
      .execute(query, [...params])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

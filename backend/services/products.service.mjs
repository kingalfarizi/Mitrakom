import sql from "../config/sql.mjs";

export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM `Barangs` ORDER BY createdAt DESC";

    sql
      .execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

import React from "react";
import { Link } from "react-router-dom";
//components
import ResetLocation from "../../helpers/ResetLocation";

const EmptyCart = () => {
  return (
    <React.Fragment>
      <h3>Oh, tidak, keranjang anda masih kosong!</h3>
      <p>Sepertinya Anda belum menambahkan apa pun ke keranjang Anda.</p>
      <Link to="/menu" className="active-button-style" onClick={ResetLocation}>
        Jelajahi Produk
      </Link>
    </React.Fragment>
  );
}

export default EmptyCart;

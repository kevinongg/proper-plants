import CartItem from "../components/CartItem";
import { useState } from "react";

const DisplayCart = ({ plant, count }) => {
  const [cart, setCart] = useState();
  if (!plant) {
    return (
      <section className="display-cart">
        <p>Your cart is empty</p>
      </section>
    );
  }
  return (
    <div>
      <h2>Cart</h2>
      <CartItem />
    </div>
  );
};

export default DisplayCart;

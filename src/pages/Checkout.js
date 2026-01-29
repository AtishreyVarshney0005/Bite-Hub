import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const placeOrder = () => {
    clearCart();
    navigate("/orders");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Checkout 💳</h2>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;

import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={styles.item}>
              <span>{item.name}</span>
              <span>₹{item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    background: "#1e1e1e",
    color: "#f5f5f5",

  },
};

export default Cart;

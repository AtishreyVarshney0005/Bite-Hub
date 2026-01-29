import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = ({ theme, toggleTheme }) => {
  const cartContext = useCart();
  const navigate = useNavigate();

  const cartItems = cartContext?.cartItems || [];

  return (
    <nav style={styles.nav}>
      {/* LOGO */}
      <div style={styles.brand} onClick={() => navigate("/")}>
        🍔 <span>Atitech Food Express</span>
      </div>

      {/* LINKS */}
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/orders" style={styles.link}>Orders</Link>
        <Link to="/login" style={styles.link}>Login</Link>

        {/* CART */}
        <Link to="/cart" style={styles.cart}>
          🛒
          {cartItems.length > 0 && (
            <span style={styles.badge}>{cartItems.length}</span>
          )}
        </Link>

       
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 30px",
    background: "#ff4d4f", 
    boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  brand: {
    fontSize: "20px",
    fontWeight: "700",
    cursor: "pointer",
    color: "#fff",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "22px",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: "500",
  },
  cart: {
    position: "relative",
    fontSize: "20px",
    color: "#fff",
    textDecoration: "none",
  },
  badge: {
    position: "absolute",
    top: "-8px",
    right: "-12px",
    background: "#fff",
    color: "#ff4d4f",
    borderRadius: "50%",
    padding: "2px 7px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  themeBtn: {
    border: "none",
    background: "#fff",
    color: "#ff4d4f",
    padding: "6px 10px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Navbar;

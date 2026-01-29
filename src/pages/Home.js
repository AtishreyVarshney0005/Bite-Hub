import { useEffect, useState } from "react";
import { fetchFoods } from "../api/foodApi";
import { useCart } from "../context/CartContext";

const Home = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadFoods = async () => {
      const data = await fetchFoods();
      setFoods(data);
      setLoading(false);
    };

    loadFoods();
  }, []);

  if (loading) {
    return <h2 style={{ padding: "40px" }}>Loading Foods... 🍽️</h2>;
  }

  if (foods.length === 0) {
    return <h2 style={{ padding: "40px" }}>No food available 😢</h2>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Popular Foods 🍔</h2>

      <div style={styles.grid}>
        {foods.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.img} />
            <h3>{item.name}</h3>
            <p>{item.category}</p>

            {/* PRICE */}
            <strong style={styles.price}>₹{item.price}</strong>

            {/* BUTTON */}
            <button style={styles.btn} onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    width: "230px",
    padding: "15px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
    textAlign: "center",
  },
  img: {
    width: "100%",
    borderRadius: "10px",
  },

  // 👇 NEW STYLE
  price: {
    display: "block",
    marginTop: "10px",
    marginBottom: "12px", // ✅ SPACE BETWEEN AMOUNT & BUTTON
    fontSize: "16px",
  },

  btn: {
    padding: "8px 14px",
    background: "#ff4d4f",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Home;

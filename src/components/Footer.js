const Footer = () => {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} Bite Hub
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#111",
    color: "#fff",
    marginTop: "40px",
  },
};

export default Footer;

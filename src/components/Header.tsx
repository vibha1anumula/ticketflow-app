// src/components/Header.jsx
const Header = () => {
  return (
    <header style={styles.header}>
      <h2>🎟 TicketFlow</h2>
      <div style={styles.profile}>[Profile 👤]</div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#0076b6e0",
    color: "#fff",
  },
  profile: {
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Header;

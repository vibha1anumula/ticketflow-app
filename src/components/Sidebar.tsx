// src/components/Sidebar.jsx
const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>Dashboard</li>
        <li style={styles.menuItem}>Events</li>
        <li style={styles.menuItem}>Book Ticket</li>
        <li style={styles.menuItem}>My Tickets</li>
        <li style={styles.menuItem}>Settings</li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: "200px",
    background: "#f8f9fa",
    borderRight: "1px solid #ddd",
    padding: "20px",
    minHeight: "calc(100vh - 100px)", // adjust for header/footer
  },
  menu: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  menuItem: {
    padding: "10px 0",
    cursor: "pointer",
    color: "#0077b6",
    fontWeight: "500",
  },
};

export default Sidebar;

// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer style={styles.footer}>
      © 2025 TicketFlow – All Rights Reserved
    </footer>
  );
};

const styles: { footer: React.CSSProperties } = {
  footer: {
    textAlign: "center",
    padding: "10px",
    background: "#eee",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    fontSize: "14px",
    color: "#333",
    borderTop: "1px solid #ccc",
  },
};

export default Footer;

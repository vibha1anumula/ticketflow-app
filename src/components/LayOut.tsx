import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={styles.container}>
      <Header />

      <div style={styles.body}>
        <Sidebar />
        <main style={styles.main}>{children}</main>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    minHeight: "100vh",
  },
  body: {
    display: "flex",
    flex: 1,
  },
  main: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#fafafa",
  },
};

export default Layout;

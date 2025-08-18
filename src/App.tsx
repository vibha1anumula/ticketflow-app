import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import LayOut from "./components/LayOut";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Sidebar />
      <LayOut>
        <div>
          {/* Add your layout content here */}
          {/* Example content */}
          <h1>Welcome to TicketFlow!</h1>
        </div>
      </LayOut>
    </div>
  );
}

export default App;

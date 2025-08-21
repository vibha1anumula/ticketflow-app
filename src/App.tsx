import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import LayOut from "./components/LayOut";
import ExcerciseContainer from "./components/ExcerciseContainer";

const todos = [
  { id: 1, text: "Buy groceries" },
  { id: 2, text: "Walk the dog" },
  { id: 3, text: "Cook the Dinner" },
];

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Sidebar />
      <LayOut>
        <div>
          <h1>Welcome to TicketFlow!</h1>
        </div>
      </LayOut>
      <ExcerciseContainer todos={todos}>
        <h1>Welcome to todo</h1>
      </ExcerciseContainer>
    </div>
  );
}

export default App;

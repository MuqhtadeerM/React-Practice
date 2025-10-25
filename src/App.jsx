import "./App.css";
import Accordion from "./components/Accordion";
import RandomColor from "./components/Random-Color";

function App() {
  return (
    <div className="app">
      {/* Accordion-Functionality Component */}
      <Accordion />

      {/* Generate Random Color Component */}
      <RandomColor />
    </div>
  );
}

export default App;

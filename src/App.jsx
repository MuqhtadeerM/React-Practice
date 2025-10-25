import "./App.css";
import Accordion from "./components/Accordion";
import RandomColor from "./components/Random-Color";

function App() {
  return (
    <div className="app">
      {/* Accordion-Functionality */}
      <Accordion />

      {/* Generate Random Color */}
      <RandomColor />
    </div>
  );
}

export default App;

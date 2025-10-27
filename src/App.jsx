import "./App.css";
import Accordion from "./components/Accordion";
import RandomColor from "./components/Random-Color";
import StarRating from "./components/Star-Rating";

function App() {
  return (
    <div className="app">
      {/* Accordion-Functionality Component */}
      <Accordion />

      {/* Generate Random Color Component */}
      <RandomColor />

      {/* Star Rating App */}
      <StarRating />
    </div>
  );
}

export default App;

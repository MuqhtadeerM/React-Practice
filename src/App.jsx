import "./App.css";
import Accordion from "./components/Accordion";
import ImageSlider from "./components/Image-Slider";
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

      {/* Image Slider */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;

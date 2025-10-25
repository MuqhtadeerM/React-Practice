import { useState } from "react";
import "./styles.css";

// this wiill generate hex, rgb, etc
export default function RandomColor() {
  // we use two states one will store type of color another one will current default color

  const [typeOfColor, setTypeOfColor] = useState("hex"); // it will set default color type is hex
  const [color, setColor] = useState("#000"); // it will set the default color is black

  //Generating Random number using mathmatic calculation
  const randomUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  // generating the hex colors
  const handleRandomHEXColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; // hex contains any of these
    let hexColor = "#"; // color hex start with # {hash}

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomUtility(hex.length)];
    }
    console.log(hexColor);

    setColor(hexColor);
  };

  // generating rgb color values
  const handleRandomRGBColor = () => {
    const r = randomUtility(256);
    const g = randomUtility(256);
    const b = randomUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex" ? handleRandomHEXColor : handleRandomRGBColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#5f5c5cff",
          fontSize: "80px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

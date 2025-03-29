import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");

  const handleChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="project-container">
      <h1 className="title">Color Picker App</h1>
      <div className="color-box" style={{backgroundColor: color}}>
        <p>Selected color: {color}</p>
      </div>
      <label>Select a color:</label>
      <input type="color" value={color} onChange={handleChange} />
    </div>
  );
};

export default ColorPicker;

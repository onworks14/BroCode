import react, {useState} from "react";

function ColorPicker()
{

  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange()
    {
      setColor(event.target.value);
    }

  const copyValueToClipboard = (value) => {
    navigator.clipboard.writeText(value);
  }
  
  return (<div className="color-picker-container">
          <h1>Color Picker</h1>
          <div className="color-display" style={{backgroundColor: color}}>
            <p>Selected color: {color}</p>
          </div>
    <label>Select a color: </label>
    <input type="color" value={color} onChange={handleColorChange} />
    <button onClick={() => copyValueToClipboard(color)}>Copy Code</button>
  </div>);
}

export default ColorPicker
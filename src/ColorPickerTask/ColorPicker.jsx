import React, { useState } from 'react';


const ColorPicker = () => {

    const [color, setColor] = useState('#FFFFFF');

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
    <div className = "color-picker-container" style={
        {
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "50px"
            
        }}>
    
            <h2>[_Color Picker_] </h2>
            <div className="color-picker-container" style={
                { 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: '150px', 
                    height: '150px',
                    backgroundColor: color, 
                    padding: '20px', 
                    borderRadius: '8px',
                    margin: '0 auto',
                    border: '1px solid #b09595ff',
                    transition: 'background-color 0.3s ease'
                }}>

                <p style={{fontWeight:"bold"}}>Selected Color: {color}</p>
            
            </div> <br/>
            <label>Pick a Color: </label><br/><br/>   
            <input

                type="color"
                value={color}
                onChange={handleColorChange}
            />
    </div>
    );
};

export default ColorPicker;
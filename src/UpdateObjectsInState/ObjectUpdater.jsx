import React,{useState} from "react";

const ObjectUpdater = () => {

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "Red"
    });

    function handleYearChange(event){
        setCar({...car, year: event.target.value});
    }
    function handleBrandChange(event){
        setCar({...car, brand: event.target.value});
    }
    function handleModelChange(event){
        setCar({...car, model: event.target.value});
    }
    function handleColorChange(event){
        setCar({...car, color: event.target.value});
    }

    return(
        <>
            <h3>My Favourtie Car : {car.year} {car.brand} {car.model} {car.color} </h3> 
            <div style={
                {
                    
                    display:"flex", 
                    flexDirection:"column", 
                    width:"200px", 
                    gap:"10px", 
                    marginTop:"20px", 
                    
                }}>
                <input type="number" value={car.year} onChange={handleYearChange}></input>                    
                <input type="text" value={car.brand} onChange={handleBrandChange}></input>
                <input type="text" value={car.model} onChange={handleModelChange}></input>
                <input type="text" value={car.color} onChange={handleColorChange}></input>
            </div>
        </>

    );


}
export default ObjectUpdater;
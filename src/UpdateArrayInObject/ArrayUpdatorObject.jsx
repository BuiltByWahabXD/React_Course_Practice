//  Here We will update an array which contains objects as its elements.
// We will add new car objects to the array and also remove car objects from the array on click.

import React, { useState } from "react";
const ArrayUpdatorObject = () => {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState([]);
    const [carModel, setCarModel] = useState([]);

    function handleAddCar() {

        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };
        setCars(c =>[...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    };
    function handleRemoveCar(index) {
         
        setCars(c => c.filter((_, i) => i !== index));

    };
    
    function handleYearChange(event) {
        
        setCarYear(event.target.value);
    
    };
    function handleMakeChange(event) {

        setCarMake(event.target.value);
        
    };
    function handleModelChange(event) {
        
        setCarModel(event.target.value);

    };
    return (
        <div>
            <h2>List Of Car Objects</h2>
            <ul>
                {
                cars.map((car, index) => 
                    <li key={index} onClick={()=> handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                )}
            </ul>
            <input type="number" placeholder="Car Year" value={carYear} onChange={handleYearChange}></input>
            <br/>
            <br/>
            <input type="text" placeholder="Car Make" value={carMake} onChange={handleMakeChange}></input>
            <br/>
            <br/>
            <input type="text" placeholder="Car Model" value={carModel} onChange={handleModelChange}></input>
            <br/>
            <br/>
            <button onClick={handleAddCar} >Add Car</button>
        </div>
    );
};

export default ArrayUpdatorObject;
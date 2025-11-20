import React,{ useState } from 'react';

const UseStateComponent = () => {
    let userName, userAge;
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

    const nameHandler = (newName, userAge) => {

        setName(newName);
        setAge(userAge);
    }




return (
            <>
                <h2>Name: {name}</h2>
                <h2>Age: {age}</h2>
                <input 
                    type="text" 
                    placeholder="Enter your name"
                    onChange={(e) => userName = e.target.value}
                />
                <br />
                <br />
                <input 
                    type="number" 
                    placeholder="Enter your age"
                    onChange={(e) => userAge = e.target.value}
                />
                <br />
                <br />
                <button onClick={() => nameHandler(userName, userAge)}>Set Values</button> &nbsp;
                <button onClick={() => nameHandler("Guest", 0)}>Clear Values</button>

            </>
        );
}

export default UseStateComponent;
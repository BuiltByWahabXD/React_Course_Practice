import React,{ useState } from 'react';

const CounterState = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <>  
            <h1 style={{textAlign: 'center', fontSize: '70px'}}>{count}</h1>
            <div style = {{textAlign: 'center'}}>   
            <button onClick={decrement} style={{borderRadius:'4px',backgroundColor: 'yellow', fontSize: '17px', marginRight: '10px'}}>Decrement</button>
            <button onClick={reset} style={{borderRadius:'4px',backgroundColor: 'red',fontSize: '17px', marginRight: '10px'}}>Reset</button>
            <button onClick={increment} style={{borderRadius:'4px',backgroundColor: 'yellow',fontSize: '17px'}}>Increment</button>
            </div>
        
        </>


    );
}
export default CounterState;
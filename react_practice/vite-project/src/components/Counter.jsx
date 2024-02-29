import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const incrementCounter = () => {
        setCount(count + 1);
    };
    const decrementCounter = () => {
        setCount(count - 1);
    };
    return (
    <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <h1>{count}</h1>
    </div>
    )
};


export default Counter
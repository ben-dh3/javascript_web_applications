import React, { useState } from 'react';

function Die() {
    const [number, setNumber] = useState(1);
    const throwDie = () => {
        setNumber(Math.floor(Math.random() * 6) + 1);
    };

    return (
    <div>
        <button onClick={throwDie}>throw die</button>
        <h1>{number}</h1>
    </div>
    )
};


export default Die
import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const plus = (): void => {
        setCounter(counter + 1)
    }
    const minus = (): void => {
        setCounter(counter - 1)
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    );
};

export default Counter;
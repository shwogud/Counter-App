import React, { useState } from "react";
import { Button, Space } from 'antd';
import '../stylingComponents/Counter.css';

const Counter = ({}) => {
    const [count, setCount] = useState(0);

    const decreaseCount = () => {
        setCount(count-1);
    }

    const increaseCount = () => {
        setCount(count+1)
    }
  return (
    <div className="Counter-container">
        <Button type="primary" onClick={decreaseCount}>-</Button>

        <h2>{count}</h2>

        <Button type="primary" onClick={increaseCount}>+</Button>

    </div>
  );
};

export default Counter;
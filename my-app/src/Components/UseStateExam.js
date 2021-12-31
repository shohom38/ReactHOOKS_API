import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Counter() {
    const [num, setNum] = useState(0); //초기값 0

    const ClickUp = () => {
        setNum(num + 1);
    }

    const ClickDown = () => {
        setNum(num - 1);
    }

    return (
        <div>

            <div>
                <Link to={`/InputExm`}><button>useRef</button></Link>
            </div>
            <div>
                <h1>{num}</h1>
                <button onClick={ClickUp}>UP</button>
                <button onClick={ClickDown}>DOWN</button>
            </div>
        </div>
    )
}

export default Counter;
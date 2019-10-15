import React, {useState} from 'react';

export default () => {
    const [item, setItem] = useState(1);
    const increamentItem = () => setItem(item + 1);
    const decreamentItem = () => setItem(item - 1);
    return (    
        <div>
            <h1>hello {item}</h1>
            <h2>item!</h2>
            <button onClick={increamentItem}>plus</button>
            <button onClick={decreamentItem}>minus</button>
        </div>
    )
}

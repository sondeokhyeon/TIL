import React, {useState} from 'react';

export default () => {
    const [item, setItem] = useState(1);
    const increamentItem = () => setItem(item + 1);
    const decreamentItem = () => setItem(item - 1);
    return (    
        <div>
            <h1>hello useState! {item}</h1>
            <h2>item!</h2>
            <button onClick={increamentItem}>plus</button>
            <button onClick={decreamentItem}>minus</button>
            <hr/>
            <h1>CODE</h1>
            <pre> 
{`const [item, setItem] = useState(1);
const increamentItem = () => setItem(item + 1);
const decreamentItem = () => setItem(item - 1);
return (
    <div>
        <h1>hello {item}</h1>
        <h2>item!</h2>
        <button onClick={increamentItem}>plus</button>
        <button onClick={decreamentItem}>minus</button>
    </div>
)`}            
            </pre>
            <span>  
                useState는 기존 클래스 기반의 setState 대체하여 사용할 수 있다
            </span>
        </div>
    )
}

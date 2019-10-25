import React, {useEffect, useRef} from "react";

const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        if(element.current) {
            element.current.addEventListener('click', onClick);
        }
        return () => {
            if(element.current) {
                console.log('해제')
                element.current.removeEventListener('click', onClick)
            }
        }
    }, [])
    return element;
}

export default () => {
    const sayHello = () => console.log('say Hello');
    const title = useClick(sayHello);
    return (
        <div>
            <h1 ref={title}>Hi</h1>
            <hr/>
            <h1>CODE</h1>
<pre>{`
const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        if(element.current) {
            element.current.addEventListener('click', onClick);
        }
        return () => {
            if(element.current) {
                console.log('해제')
                element.current.removeEventListener('click', onClick)
            }
        }
    }, [])
    return element;
}

export default () => {
    const sayHello = () => console.log('say Hello');
    const title = useClick(sayHello);
    return (
        <div>
            <h1 ref={title}>Hi</h1>
        </div>
    )
}
`}</pre>
        </div>
    )
}
import React from "react";

const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    }
    const enablePrevent = () => window.addEventListener("beforeunload", listener)
    const disablePrevent = () => window.removeEventListener("beforeunload", listener)

    return {enablePrevent, disablePrevent};
}

export default () => {
    const {enablePrevent, disablePrevent} = usePreventLeave();
    return (
        <div>
            <button onClick={enablePrevent}>protect</button>
            <button onClick={disablePrevent}>unprotect</button>
            <hr/>
            <h1>CODE</h1>
        <pre>{
            `
const usePreventLeave = () => {
const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
}
const enablePrevent = () => window.addEventListener("beforeunload", listener)
const disablePrevent = () => window.removeEventListener("beforeunload", listener)

return {enablePrevent, disablePrevent};
}

export default () => {
    const {enablePrevent, disablePrevent} = usePreventLeave();
    return (
        <div>
            <button onClick={enablePrevent}>protect</button>
            <button onClick={disablePrevent}>unprotect</button>
            <hr/>
            <h1>CODE</h1>
        </div>
    )
}
            `
        }
        </pre>
        </div>
    )
}
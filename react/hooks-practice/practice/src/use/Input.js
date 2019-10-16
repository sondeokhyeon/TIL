import React, {useState} from "react"

const useInput = (initValue, validate) => {
    const [value, setValue] = useState(initValue)
    const onChange = (event) =>  {
        const {
            target : { value }
        } = event;
        let willUpdate = true;
        if(typeof validate === "function") {
            willUpdate = validate(value)
        }
        if(willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
}

const Input = () => {
    const maxLen = value => value.length <= 10 || value.includes("@");
    const name = useInput("Mr.", maxLen);
    return (
        <div>
        <div>
            <h1>Use Input</h1>
            <input placeholder="Name" {...name}/>
            {/* <input placeholder="Name" value={name.value} onChange={name.onChange}/> */}
        </div>
        <hr/>
        <h1>CODE</h1>
        <pre>{`const useInput = (initValue, validate) => {
const [value, setValue] = useState(initValue)
const onChange = (event) =>  {
        const {
            target : { value }
        } = event;
        let willUpdate = true;
        if(typeof validate === "function") {
            willUpdate = validate(value)
        }
        if(willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
}

const Input = () => {
    const name = useInput("Mr.")
    return (
        <div>
        <div>
            <h1>Input</h1>
            <input placeholder="Name" {...name}/>
            {/* <input placeholder="Name" value={name.value} onChange={name.onChange}/> */}
        </div>
    )
}
`}
</pre>
        <span> useState 활용 </span>
        </div>
    )
}
export default Input


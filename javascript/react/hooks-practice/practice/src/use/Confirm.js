import React from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
    if(!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if(!onCancel || typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => {
        if(window.confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    }
    return confirmAction;
}

export default () => {
    const deleteWorld = () => console.log('Deleteing the world....');
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
    return (
        <div>
            <button onClick={confirmDelete}>Delete the world</button>
        <hr/>
        <h1>CODE</h1>
<pre>
{`
const useConfirm = (message = "", onConfirm, onCancel) => {
    if(!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if(!onCancel || typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => {
        if(window.confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    }
    return confirmAction;
}

export default () => {
    const deleteWorld = () => console.log('Deleteing the world....');
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
    return (
        <div>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    )
}
`}    
</pre>
        </div>
    )
}
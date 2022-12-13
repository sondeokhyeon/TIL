import React, {useState, useEffect} from "react";

const useTitle = initTitle => {
    const [title, setTitle] = useState(initTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector('title')
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title])
    return setTitle;
}

export default () => {
    const titleUpdate = useTitle('Loading...')
    setTimeout(() => titleUpdate('Home'), 5000)
    return (
        <div>
            <div>Hi</div>
<pre>{`
const useTitle = initTitle => {
    const [title, setTitle] = useState(initTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector('title')
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title])
    return setTitle;
}

export default () => {
    const titleUpdate = useTitle('Loading...')
    setTimeout(() => titleUpdate('Home'), 5000)
    return (
        <div>
            <div>Hi</div>
        </div>
    )
}
`}</pre>
        </div>
    )
}
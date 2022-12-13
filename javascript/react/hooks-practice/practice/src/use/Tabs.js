import React, { useState } from 'react';

const content = [
    {
        tab : "Section 1",
        content : "I'm the content of the section 1"
    },
    {
        tab : "Section 2",
        content : "I'm the content of the section 2"
    }
]

const useTabs = (initTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initTab);
    if(!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return {
        currentItem : allTabs[currentIndex],
        changeItem : setCurrentIndex
    }
}

const Tabs = () => {
    const {currentItem, changeItem} = useTabs(0, content);

    return (
        <div>
            {content.map((section, index) => (
                <button key={index} onClick={() => changeItem(index)}>
                    {section.tab}
                </button>
            ))}
            <div>{currentItem.content}</div>
            <hr/>
            <h1>CODE</h1>
            <pre>
            {`
const content = [
    {
        tab : "Section 1",
        content : "I'm the content of the section 1"
    },
    {
        tab : "Section 2",
        content : "I'm the content of the section 2"
    }
]

const useTabs = (initTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initTab);
    if(!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return {
        currentItem : allTabs[currentIndex],
        changeItem : setCurrentIndex
    }
}

const Tabs = () => {
    const {currentItem, changeItem} = useTabs(0, content);

    return (
        <div>
            {content.map((section, index) => (
                <button key={index} onClick={() => changeItem(index)}>
                    {section.tab}
                </button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    )
}
`}</pre>
<span> useState 활용 </span>                    
        </div>
    )
}

export default Tabs;
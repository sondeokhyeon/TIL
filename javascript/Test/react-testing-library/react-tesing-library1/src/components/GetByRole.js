
export const Heading = () => {
    return (
        <div>
            <h1>hello</h1>
            <h2>world</h2>
        </div>
    )
}

export const TextBox = () => {
    return (
        <div>
            <div>
                <label htmlFor="name">name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="title">title</label>
                <input type="text" id="title" value="tom" readOnly/>
            </div>
            <div>
                <label htmlFor="profile">profile</label>
                <input type="text" id="profile" />
            </div>
        </div>
    )
}

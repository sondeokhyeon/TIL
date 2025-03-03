import Ioc from './ioc/'
import { useState } from "react";

enum RenderEnum {
    MAIN = 'main',
    IOC = 'ioc'
}

const Route = () => {
    const [render, setRender] = useState<RenderEnum>(RenderEnum.MAIN);
    return (
        <div>
            {
                Object.entries(RenderEnum).map(([k, v]) => {
                    return (
                        <button onClick={() => setRender(v)} key={v}>{k}</button>
                    )
                })
            }
            <div>
                {Factory(render)}
            </div>
        </div>
    )
}

const Main = () => {
    return (
        <div>MAIN</div>
    )
}

const Factory = (render: RenderEnum) => {
    switch (render) {
        case RenderEnum.MAIN:
            return <Main />
        case RenderEnum.IOC:
            return <Ioc />
        default: return <></>
    }
}

export default Route;

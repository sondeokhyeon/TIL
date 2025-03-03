import { useState, useTransition } from "react";

export const Transition = () => {
    const [state1, setState1] = useState("");
    const [state2, setState2] = useState("");

    /* useTransition은 18v에서 추가된 훅으로서 상태 변화에 우선순위를 낮아지게 지정하는 훅이다. */
    const [isPending, startTranstion] = useTransition()

    const v18Action = () => {
        setState1("job1..")
        startTranstion(() => {
            setState2("job2..")
        })
    }

    const v19Action = () => {
        setState1("job3")
        /* 19version 에서는 async 함수도 우선순위를 낮출 수 있다.   */
        startTranstion(async () => {
            await dealy();
            setState2('job4')
        })
    }

    return (
        <div>
            <button onClick={v18Action}>Action1</button>
            <button onClick={v19Action}>Action2</button>
            <div>
                {isPending ? 'Loading...' : <div>
                    {state1} {state2}
                </div>}
            </div>
        </div>
    )
}

const dealy = async () => {
    return new Promise((res) => setTimeout(res, 1000))
}

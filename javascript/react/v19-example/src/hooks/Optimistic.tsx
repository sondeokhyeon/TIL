import { useState, useOptimistic, startTransition } from "react"
import { delay } from "../utils/delay";


export const Optimistic = () => {
    const [isActive, setIsActive] = useState(false)

    const [optimisticIsOn, addOptimisticIsOn] = useOptimistic(
        isActive,
        (currentState, newState) => !currentState
        //newState A
    );

    const toggleWithDelay = () => {
        // useOptimistic은 React Transition이나 액션 내에서만 업데이트를 해야 한다.
        startTransition(async () => {

            // 낙관적 UI 업데이트
            addOptimisticIsOn(!isActive);

            try {
                // 서버 요청 시뮬레이션 (1초 지연)
                await delay(1000)
                // throw new Error('error')
                // 실제 상태 업데이트
                setIsActive(!isActive);
            } catch (error) {
                console.error("토글 작업 실패:", error);
                // 오류 발생 시 낙관적 상태는 자동으로 원래 상태로 되돌아감
            }

        })
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button style={{
                width: '30px', height: '30px', border: '1px solid black',
                ...(optimisticIsOn && { background: 'black' })
            }}
                onClick={() => {
                    toggleWithDelay()
                }} ></button>
        </div >
    )
}

import { useFormStatus } from 'react-dom'
import { delay } from '../utils/delay'

export const FormStatus = () => {


    // useFormState는 서버 컴포넌트랑 같이 사용하는 HOOK으로서 
    // fn(첫번째 파라미터)는 서버에서 submit시 핸들링하는 함수를 넣어야 한다.  
    // initalState(두번째 파라미터)는 inital값을 넣어야 한다
    // const [state, formAction]= useFormState(fn, initalState)
    // 구조 분해로 인해 얻어지는 파라미터는 state, formAction이 있는데 
    // state는 폼의 상태값인데 사용자의 입력값이나 유효성 검사 상태등이 포함된다.
    // formAction을fn을 submit하는 트리거라고 보면 된다 .


    const submit = async (form: FormData) => {
        await delay(1500)
        console.log(form)
    }

    return (
        <div>
            <h1></h1>
            <form action={submit}>
                <input type="text" />
                <Submit />
            </form>
        </div >
    )
}

function Submit() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
            {pending ? "Submitting..." : "Submit"}
        </button>
    );
}

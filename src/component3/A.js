import { useContext, useRef } from "react";
import UserContext, { UserConsumer } from "../contexts/ContextAPI2";


const A = () => {
    
    //초기값을 구조분해 할당
    const {state, action} = useContext(UserContext);
    // console.log(result); //캡쳐에서는 result 확인

    //useRef
    const input1 = useRef(null);
    const input2 = useRef(null);
    const handleClick = () => {
        console.log(input1.current.value); //input1.current = input태그
        console.log(input2.current.value); //input1.current.value = 사용자가 입력한 값
        
        //contextAPI의 action의 사용
        action.setUser({id: input1.current.value,
                        name: input2.current.value})
    }

    return (
        /* 2nd - useContext훅을 이용해서 처리 */
        <div>
            <h3>A 컴포넌트</h3>
            context 안의 값: {state.id}<br/>
            context 안의 값: {state.name}<br/>
            <div>
                <input type="text" ref={input1}/>
                <input type="text" ref={input2}/>
                <button onClick={handleClick}>컨텍스트 데이터 변경</button>
            </div>
        </div>


        /* 1st
        <UserConsumer>
            {
                (value) => (
                    <div>
                        <h3>A 컴포넌트</h3>
                        context 안의 값: {value.state.id}<br/>
                        context 안의 값: {value.state.name}<br/>
                    </div>
                )
            }
        </UserConsumer> */
    )
}

export default A;
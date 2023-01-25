import { useContext } from "react";
import UserContext from "../contexts/ContextAPI2";


const C = () => {

    const {state, action} = useContext(UserContext);
    
    return (
        <>
        <h3>C 컴포넌트</h3>
        context 안의 값: {state.id}<br/>
        context 안의 값: {state.name}<br/>
        </>
    )
}

export default C;
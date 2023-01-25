import A from "./component3/A";
import B from "./component3/B";
import { UserProvider } from "./contexts/ContextAPI2";

const App = () => {

    /* 
        전역데이터 관리 ContextAPI
        1. 외부 ContextAPI2의 컨슈머, 프로바이더 export
        2. root에서는 export된 프로바이더로 감싸줌
        3. 자식컴포넌트에서는 useContext(컨텍스트명)를 이용해서 데이터를 핸들링
    */

    return (
        <UserProvider> {/* A, B가 children으로 들어감 */}
            <A/>
            <B/>
        </UserProvider>
    )
}

export default App;

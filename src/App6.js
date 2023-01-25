import { Fragment, useState } from "react";
import ColorComponent from "./component3/ColorComponent";
import ColorContext from "./contexts/ContextAPI";

const App = () => {

    /* 
        p.495

        1. ContextAPI 외부에 선언 createContext()훅 사용
        2. 자식 컴포넌트 consumer로 데이터를 받기
        3. 부모 컴포넌트 provider로 데이터를 전달(변경)
           자식들의 공통 component에다가 넣는 것 (사진상에서 Root 파일에서는 App)
    */

    //select 태그를 만들고 useState를 활용해서 color값을 변경

    const [change, setChange]= useState('선택');

    const handleChange = (e) => {
        setChange(e.target.value);
    }

    return (
        <Fragment>
            <ColorContext.Provider value={{color: change}}> {/* value는 props임 */}
            {/* Provider는 사용할 root컴포넌트에 선언합니다. */}

            <ColorComponent/>

            <select onChange={handleChange}> {/* 셀렉트가 change될 때 useState로 관리 */}
                <option value="blue">파랑</option> {/* e.target.value 값 = blue */}
                <option value="yellow">노랑</option>
                <option value="green">초록</option>
            </select>
            </ColorContext.Provider>
        </Fragment>
    )
}

export default App;
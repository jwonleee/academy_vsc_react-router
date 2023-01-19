import { Link, NavLink, Outlet } from "react-router-dom";


const Board = () => {

    const myStyle = {color: "red", backgroundColor: "yellow"};

    return(
        <div>
            <h3>글 목록 페이지</h3>

                <ul>
                    {/* <li><Link to="/board/1">글1</Link></li>
                    <li><Link to="/board/2">글2</Link></li>
                    <li><Link to="/board/3">글3</Link></li> */}

                    {/* 
                        NavLink는 {isActive: boolean}을 함수의 매개변수로 사용할 수 있게 전달해 줍니다. isActive - url 속성이 활성화 된 값
                        반드시 {isActive} 변수로 구조분해 할당 해야 합니다.
                        태그의 활성화 여부를 표시합니다.
                        현재 선택한 대상만 myStyle이 적용
                    */}

                    <li><NavLink to="/board/1" style={ ({isActive}) => isActive ? myStyle : null}>글1</NavLink></li>
                    <li><NavLink to="/board/2" style={ ({isActive}) => isActive ? myStyle : null}>글2</NavLink></li>
                    <li><NavLink to="/board/3" style={ ({isActive}) => isActive ? myStyle : null}>글3</NavLink></li>
                </ul>

            <Outlet/>
        </div>
    )
}

export default Board;
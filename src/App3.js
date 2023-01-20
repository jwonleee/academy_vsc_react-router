import { Fragment, useEffect, useState } from "react"


const App = () => {
    
    /* 
        Ajax를 이용해서 외부데이터 가져오가
        1. Promise = fetch()
    */

    //클릭해서 데이터 가져오기
    const [raw, setRaw] = useState();
    const handleClick = () => {
        fetch("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
        .then( response => response.json() )
        .then( data => setRaw(data)) // 클릭 이벤트를 넣지 않고 그냥 하면 계속 실행되서 무한루프 돈다. 절대 하면 안됨
    }

    //화면이 mount이후 데이터 가져오기 = 화면 렌더링 완료시 데이터 처리하기
    const [data, setData] = useState();
    useEffect( () => { //첫번째 렌더링 완료시만 데이터만 가져오도록
        fetch("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
        .then( response => response.json() )
        .then( data => setData(data))
    }, []);

    return (
        <Fragment>

            <button onClick={handleClick}>데이터 가져오기</button>
            { //JSX 문법 - 3항 연산자
                raw === undefined ? //state는 비어있기 때문에 빈 화면에 대한 처리를 해줘야 함
                <div>
                    데이터준비중
                </div>
                :
                <div>
                    아이디: {raw.userId},
                    비밀번호: {raw.userPw},
                    이름: {raw.userName}
                </div>
            }

            {/*
                가져온 데이터: {raw.userId}, {raw.userPw}, {raw.userName}
                우선 화면을 바로 뿌려주는데 버튼을 누르지 않으면 state값이 없어서 바로 찍으면 annot read properties of undefined 뜸. 그래서 다른 화면을 보여줘야함
            */}

            <h3>mount이후 데이터 가져오기</h3>
            {
                data && <div> {/* 처음에는 state값 없으므로 조건을 줘야함 */}
                    아이디: {data.userId}
                    비밀번호: {data.userPw}
                    이름: {data.userName}
                </div>
            }


        </Fragment>
    )
}

export default App;
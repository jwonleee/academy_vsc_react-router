import { Navigate, useNavigate } from "react-router-dom";


const MyPage = () => {

    
        // 첫번째 렌더링 과정에서는 사용할 수 없음
        // React.useEffect()에서 navigate()를 호출해야 합니다.
        /*
        let nav = useNavigate();
        let loginYN = false; //로그인 여부
        if(loginYN === false) { //아직 로그인이 안되어 있다
            nav('/');
        }
        */
    


    //권한이 없으면 리다이렉트
    //replace={true}를 설정하면 기록을 남기지 않습니다. MyPage에 들어갔던 이력은 사라지게 됨
    let loginYN = false;
    if(loginYN === false) {
        return <Navigate to='/' replace={true}/>
    }


    return (
        <div>
            권한 있는 사람만 접근이 가능함
        </div>
    )
}

export default MyPage;
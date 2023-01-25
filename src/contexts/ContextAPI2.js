import { createContext, useState } from "react";


// 1. 초기값 설정 - 초기값은 객체로
const UserContext = createContext({ /* 객체 안의 객체 2개(state, action) */
    state: {id: 'aaa', name: 'bbb'}, /* 실제로 관리할 값, 그냥 초기값의 모형, 주석해도 상관x */
    action: {
        setUser: () => {}
    }
})

// 2. Provider 정의 - 함수의 모형, 구조분해 할당은 반드시 children으로
const UserProvider = ({children}) => { /* 자식 요소 모두 선택하는 js의 children(반드시)을 구조분해 할당으로 받음 = children이라는 키를 가져오는 것 */

    const [user, setUser] = useState({id: 'aaa', name: 'bbb'}); /* 초기값은 위의 UserContext 형식으로 */

    const value = {
        state: user,
        action: {setUser} /* {setUser: setUser} setUser라는 키는 setUser함수를 줄인 형태 */
    }

    console.log(children);
    console.log(value);

    return ( /* 외부에서 사용할 Provider 리턴 */
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
        /* 위의 저장된 value를 Provider의 props로 전달 = value={value} */
    )

}

//3. 컨슈머, 프로바이더 반환
const UserConsumer = UserContext.Consumer; /* Consumer 객체를 얻어서 UserConsumer에 저장 */

export {UserProvider, UserConsumer}; /* 여러개를 반환할 때는 default 쓰지 않고, {} 사용 */

//4. 기본 export
export default UserContext; /* 외부에서 사용해야 하기 때문에 디폴트로 export */
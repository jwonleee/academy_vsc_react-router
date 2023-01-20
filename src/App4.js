import axios from "axios"
import { Fragment, useState } from "react"



const App = () => {

    /* 
  /* 
    /* 
        Axios는 비동기를 편하게 처리하는 라이브러리 입니다. (fetch로 사용해도 무방합니다.)
        - 설치 npm add axios
        - Axios는 get(), post() 함수를 제공하고, 사용했을 때 리턴은 Promise
    */

    const [data, setData] = useState();

    const handleClick = async () => {

        let result = await axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json");
        console.log(result.data);

        console.log(1);

        let result2 = await axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json");
        console.log(result2.data);

        console.log(2);

        let result3 = await axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json");
        console.log(result3.data);

        console.log(3);

    }


    //순서를 보장받고 싶다면? 콜백함수의 지옥
    /* 
    const handleClick = () => {
        axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
        .then(Response => {
            console.log(Response.data);
            console.log(1);

            axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json")
            .then(Response => {
                console.log(Response.data)
                console.log(3);

                axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json")
                .then(Response => {
                    console.log(Response.data);
                    console.log(5);
                });

            });

        });
    }
    */


    //비동기는 순서를 보장하지 않음
    /* 
    const handleClick = () => {
        axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
        // console.log(result); Promise 객체 나옴
        .then(Response => {
            console.log(Response.data);
            console.log(1);
        })

        console.log(2);

        axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json")
        .then(Response => {
            console.log(Response.data)
            console.log(3);
        })

        console.log(4);

        axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json")
        .then(Response => {
            console.log(Response.data);
            console.log(5);
        })
    }
    */

    return (
        <Fragment>
            <h3>엑시오스로 데이터 가져오기</h3>

            <button onClick={handleClick}>데이터 가져오기</button>

            {
                data && <div>
                    아이디: {data.userId},
                    비밀번호: {data.userPw},
                    이름: {data.userName}
                </div>
            }
        </Fragment>
    )
}

export default App;
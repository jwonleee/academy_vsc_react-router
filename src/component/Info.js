import { useParams } from "react-router-dom";



const Info = () => {

    const data = {
        1: {name: "리사", subject: "리액트라우터"},
        2: {name: "제니", subject: "리액트props"},
        3: {name: "지수", subject: "리액트state"},
        4: {name: "로제", subject: "리액트일지도..?"},
    }

    //useParams();
    let param = useParams(); //객체로 반환
    // console.log(param); //{num: '1'}, {num: '2'}, {num: '3'}나옴, URL주소에 값을 키로 받습니다.
    console.log(param.num); //1, 2, 3 나옴

    const obj = data[param.num]; // const obj = data[1];
    console.log(obj); //번호에 맞는 객체가 나옴, {name: '리사', subject: '리액트라우터'}
    const {name, subject} = data[param.num]; //데이터의 1번을 name, subject 담아줌

    return (
        <div>
            <h3>인포 화면</h3>
            {name}님의 데이터 {subject}
        </div>
    )
}

export default Info;